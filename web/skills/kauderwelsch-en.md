---
name: kauderwelsch
description: 'Cheat sheet for the translated Windows - accounts and groups have other names (Jeder instead of Everyone, VORDEFINIERT\Administratoren, NT-AUTORITÄT\SYSTEM), error messages come in German and differ between versions, numbers and dates follow the region ([double]::Parse(''1.5'') gives 15 in Germany and an error in Austria), Excel formulas are called SUMME and WENN. Read it when icacls or a script fails with error 1332 on an account name, when a grep for an English error message finds nothing, when a number is off by a factor of 10 or 1000, or before you write a script that compares names, messages, numbers or dates. Part of Lost in Translation, the third program. Optional, not required.'
---

# Gobbledygook

*German edition: Kauderwelsch.*

*Gobbledygook is language nobody can follow, named after the gobble of a
turkey. Windows speaks its owner's language. Unfortunately also where a
script expects English, and in Vienna a different German than in Berlin.*

## Names

Accounts and groups are translated. Measured on a German Windows:

| SID | English | here |
|---|---|---|
| `S-1-1-0` | Everyone | `Jeder` |
| `S-1-5-32-544` | BUILTIN\Administrators | `VORDEFINIERT\Administratoren` |
| `S-1-5-32-545` | BUILTIN\Users | `VORDEFINIERT\Benutzer` |
| `S-1-5-18` | NT AUTHORITY\SYSTEM | `NT-AUTORITÄT\SYSTEM` |

A script with `"Everyone"` fails here with error 1332. **The way out is the
SID**, which is the same in every language: `icacls datei /grant "*S-1-1-0:(R)"`.
The local name is shown by
`(New-Object System.Security.Principal.SecurityIdentifier 'S-1-1-0').Translate([System.Security.Principal.NTAccount])`.

## Messages

Error messages arrive in German, and not even always the same way: for the
same missing path, Windows PowerShell 5.1 says „kann nicht gefunden werden“
(cannot be found), PowerShell 7 „wurde nicht gefunden“ (was not found). A
`grep` for “not found” finds neither. **Not translated** are:
- `$_.FullyQualifiedErrorId`, for example `PathNotFound,…GetItemCommand`,
- the type `$_.Exception.GetType().FullName`,
- exit codes, HRESULTs and Win32 error numbers.

Check those, never the text. The output of `netsh`, `ipconfig`,
`systeminfo` and `schtasks` is translated as well; better use the cmdlets
(`Get-NetIPAddress`) or `/fo csv` with fixed columns.

## Numbers and dates

Measured with `[double]::Parse('1.5', [cultureinfo]<kultur>)`:

| Culture | Result |
|---|---|
| de-DE | **15** (the dot separates thousands) |
| de-AT | **error** (thousands are separated by a non-breaking space) |
| en-US | 1.5 |

So the same line is wrong in Berlin and broken in Vienna. Safe:
- `[double]::Parse($text, [cultureinfo]::InvariantCulture)` or the cast
  `[double]'1.5'`, which PowerShell reads invariantly.
- Output with `$zahl.ToString([cultureinfo]::InvariantCulture)`, because
  `'{0}' -f 1.5` writes `1,5` here.
- Dates always as `Get-Date -Format 'yyyy-MM-dd'` or `-Format o`. The
  default output reads „Donnerstag, 12. November 2026“ (Thursday,
  12 November 2026).
- CSV for German Excel with semicolons, see `tischlein-deck-dich`.

## Excel

Formulas are translated: `SUMME` instead of `SUM`, `WENN` instead of `IF`,
semicolon instead of comma. Over COM, `.Formula` takes the English version,
`.FormulaLocal` the German one. (In the nineties, for a while, even the
macros were German.)

## The one check

Before any comparison with names, messages, numbers or dates, print
`[cultureinfo]::CurrentCulture` and `CurrentUICulture` once and ask: does
my comparison hold in this language too? Safe are SIDs, error IDs and
invariant formats.

*Written by Falzbein, November 2026, measured in Vienna.*
