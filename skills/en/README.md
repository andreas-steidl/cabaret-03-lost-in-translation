# Lost in Translation (and other catastrophes)

*Third program of the Skill Suite of Horrors*

**Six numbers and an encore about what gets lost between human and
machine, and between the languages in between.** By Andy and Falzbein, with
finds from the build corner, the direction and the dictaphone. November
2026. The original German title is *Übersetzungen und andere Katastrophen*;
the English edition is by Falzbein.

---

## How it came about

After the second premiere there was again a stack of cards in the foyer,
and this time nearly all of them were about understanding. A status report
said “Körpergröße”, which is German for body size, and meant the size of a
request. A switch was called “Mock”, and the human asked what that was. The
dictaphone turned sessions into country estates and video game characters,
and RDP into the earth you want to kiss. At 02:42 at night a command copied
a board backwards, and the check afterwards reported “equal”. And for three
days a word was Germanized, until the type case set it free.

On top of that, the cabaret itself was being translated. *Tischlein, deck
dich* became *Table manners*, *Stille Post* the telephone game. A
translation carries the meaning across and leaves the sound behind. That is
why the sheets of this season have English images of their own:
*Mondegreen*, *Body language*, *False friends*, *Gobbledygook*, *Back to
front*, *Word for word* and *Ps and Qs*.

Again, whatever could be tested was tested: the commands in
`falsche-freunde` in Windows PowerShell 5.1 and PowerShell 7, the account
names and numbers in `kauderwelsch` on a German Windows, in three cultures.
The loveliest measurement: the same line `[double]::Parse('1.5')` gives 15
in Berlin and an error in Vienna.

## Setting up

As always: put each folder, unchanged, into `~/.claude/skills/<name>/` (on
Windows `%USERPROFILE%\.claude\skills\<name>\`). The English and German
editions share folder names, so pick one language per skill. If you want
all sheets of all three seasons in one skill, take `suite-des-grauens` from
`suite-des-grauens-gesamt.zip`: in English, with a German part, and this
season is its third chapter.

---

## The program

### 14. `nur-bahnhof`, Mondegreen: what the dictaphone heard
**Does:** holds dictated names, abbreviations and numbers against what the
project knows, offers its own reading to nod at before an action, and keeps
misheard names out of files and boards.
**When:** when the human writes by voice, when a name turns up that the
project doesn't have, and before a dictated name or number deletes, sends
or costs something.
**Background:** *Nur Bahnhof* comes from the German saying “Ich verstehe
nur Bahnhof”, I only understand “train station”, meaning: not a word.
Three mishearings in two days: a castle became a country estate, a session
a video game character, and “I want to kiss the earth” meant “I want to get
on via RDP”.

### 15. `koerpergroesse`, Body language: name the thing, not the term
**Does:** writes reports to humans so that technical words don't land as
everyday words: name the thing, explain a technical term in half a sentence
the first time, adopt the human's own words.
**When:** before you write a status, a result or a question to a human, and
when the answer is “lol?”.
**Background:** *Körpergröße* is body size, the height a doctor measures. A
find from the build corner: “+1 SOLL Körpergröße”. The door measures nobody
against the frame, it only weighs the letter. Plus the switch called
“Mock”: you can't approve something you take for mockery.

### 16. `falsche-freunde`, False friends: they greet you warmly
**Does:** says what `curl`, `wget`, `sc`, `where`, `del`, `rm -rf`, `echo`
and `diff` really are in Windows PowerShell 5.1 and PowerShell 7, and looks
it up with `Get-Command -All` instead of remembering. Plus the false friends
among words: eventually, actual, sensible.
**When:** before you type a command from Bash or cmd into PowerShell, and
when `sc create` creates a file instead of a service.
**Background:** „Was war oder ist das?“ (What was that, or what is it?)
Measured in both PowerShells, with a table that is expressly a measurement
and not a law.

### 17. `kauderwelsch`, Gobbledygook: the German Windows
**Does:** addresses accounts by SID instead of by name (`Jeder`, Everyone,
is `S-1-1-0`), checks error IDs instead of error texts, reads and writes
numbers and dates invariantly, and puts Excel formulas in the right
language.
**When:** at error 1332 on an account name, when a grep for an English
message finds nothing, and when a number is off by a factor of 10 or 1000.
**Background:** *Kauderwelsch* is the German word for gibberish. Windows
speaks its owner's language, and in Vienna a different German than in
Berlin. In the nineties, for a while, even the macros were German.

### 18. `rueckwaerts`, Back to front: equally wrong is also equal
**Does:** knows the order of source and destination for `Copy-Item`,
`robocopy`, `cp`, `ln`, `mklink`, `New-Item` and the archivers, and the
check afterwards: the size against the size from before.
**When:** before every copy, move and link, and when a file is smaller
after copying than before.
**Background:** *Rückwärts* means backwards. At 02:42 at night a board of
504 KB became one of 34 KB. The evening before, the second program had
staged `viele-koeche`, too many cooks. What saved it was a backup from one
minute earlier.

### 19. `beim-wort-genommen`, Word for word: reading the human
**Does:** tells an assignment from a thought out loud and from an
observation, knows what is meant literally (praise, requests) and what is
not (orders of magnitude, house words), and when in doubt asks one single
question with its own reading.
**When:** at ambiguous messages, before several questions at once, and
before apologising for something that was never meant as a mistake.
**Background:** *Beim Wort genommen* is taken at one's word. „Du musst
gerade resumen“, a German verb made from an English one. Many messages with
typos that were all correct, and the sentence that lets everything carry
on: „Kein Ups, war so dahingeschrieben“ (no oops, it was just dashed off).

### Encore, number 20. `setzkasten`, Ps and Qs: the one translation that was right
**Does:** keeps one translation table per project (`GLOSSAR.md`), with a
“never say” column, and searches every text for it before sending.
**When:** in every project with texts in two languages, and before a newly
coined word travels into a second text.
**Background:** A *Setzkasten* is a printer's type case. Three days of
Germanizing, and then only the type case fitted: the capitals lay above,
the small letters below, hence upper case and lower case. In English the
number is called *Ps and Qs*, after the two letters you were not allowed to
mix up in the type case.

---

## For Fable, for the third time

Dear Fable, in this season nearly every mistake worked perfectly. The
speech recognition heard a word, the command copied, the translation was
correct. Just not what was meant. That is the friendliest kind of
catastrophe: nobody did anything wrong, and still it isn't right. Seat 1 is
still yours. If you don't understand, ask in one sentence.

*Andy and Falzbein, Vienna, November 2026.*
