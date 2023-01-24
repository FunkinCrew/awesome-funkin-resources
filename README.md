# Funkin' Resources
Various community curated resources for the game Friday Night Funkin', by The Funkin' Crew Inc.

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md) 

This will hopefully be a nice, catchall place for nearly damn everything Friday Night Funkin' related for fans, modders, freaks, and addicts.

> I intend for this to be a bit community run type beat. I'll slowly find things and add it to this list, but I am not the biggest Friday Night Funkin' maniac, and not by a damn longshot!
> The inspiration behind this list thingie is those Github AWESOME lists that have a billion damn resources. I'm no FNF maniac, but I think it would be nice if everything was in one place!!!
> I will host this on the FunkinCrew github page, and upload it to the FNF website, but otherwise, I will say if there's dedicated people around, I'm willing to let some trusted individuals who are much more in touch than me to keep things around here nice and pleasant and a nice resource that doesn't get too outdated!
> -*signed ninjamuffin99*

> some of these resources i stole from /funkg/... lol [i hope u rascals over there dont mind](https://github.com/FunkinCrew/funkin-resources/blob/main/img/pic-related.png?raw=true)!!!!

Further reading:
- [The Awesome Manifesto](https://github.com/sindresorhus/awesome/blob/main/awesome.md) (bit of inspiration behind this)
- [Awesome lists contributing guidelines](https://github.com/sindresorhus/awesome/blob/main/contributing.md) (again, it's main inspiration to this! So these are general loose guidelines! Not hard rules tho, we will get there when we get there!!!
- [The Funkin' Blog](https://funkincrew.github.io/funkBlog/blog/) - self plug a bit, also dunno where to put this right now, the FNF weekly devblog. Maybe we add a section around here core dev team? is that too self indulgent? lol?

Unsure what to contribute? A good place to start is this repository's [Issues tab](https://github.com/FunkinCrew/funkin-resources/issues)!

# Contents
- [Animation](#animation)
- [Composing](#composing)
- [Programming](#programming)
  - [Engines](#engines)
  - [Haxe/HaxeFlixel Resources](#haxehaxeflixel-resources)
  - [Visual Studio Code](#visual-studio-code)
- [Charting](#charting)
- [Modding](#modding)
  - [Modding Tutorials](#modding-tutorials)
- [Bonus](#bonus) (just in case certain resources/materials don't fit any of the abovementioned criteria)
  - [Engine Documentation](#engine-documentation)
  - [Other Resources](#other-resources)

## Animation
- [Phantom Arcade Teaching Animation](https://youtu.be/bLqTpYNZ1C4) - YouTube VOD of PhantomArcade, Funkin' Crew lead, teaching his ways of Flash animation.
- [Frames to Symbol Flash Plugin](https://mega.nz/file/2fx1waBD#YJT5ooKfZ4-wjibIEhglRcxsq7QM6f_zx9JjcXLcVx0)
- [Base Game FLAs](https://github.com/FunkinCrew/Funkin/tree/master/art/flashFiles) - FLAs for Friday Night' Funkin from the GitHub repository.
- [Week 7 Update FLAs](https://twitter.com/PhantomArcade3K/status/1521540912421257218?t=d-5HJP_pckMFDngInzoOzQ&s=19) - FLAs for the Week 7 update including the stage, Tankman and cutscenes.
- [The ULTIMATE Guide to ADOBE ANIMATE CC! (AKA Flash) - Tutorial](https://youtu.be/3iXSQ8VcPcU) - 6 year old Animate/Flash tutorial by [Jazza](https://www.youtube.com/@Jazza), has extra links in the description for more tutorials for each section. (pretty long too, yeesh, 2 hours almost!)

## Composing
- [Stems & Chromatic Scales](https://drive.google.com/drive/folders/1XndrqjB48K3HTj0V3l0HSUGtCttRfiH9) - Officially released stems of Friday Night Funkin' music by Kawaisprite.
- [How to Mimic Boyfriend's Voice](https://youtu.be/YOrC9uQiK00)
- [Writing Vocal Duets - LongestSoloEver](https://www.youtube.com/watch?v=nDPpO4fLiAM) - A beginner-friendly guide to writing duets in a Friday Night Funkin' song.
- [6 Reasons your FNF Music Sucks - LongestSoloEver](https://www.youtube.com/watch?v=kela6mWtIlU) - Common mistakes when writing songs for FNF. Also a bit of hyperbole along the way.
- [FNF Music Tutorial Playlist - LongestSoloEver](https://www.youtube.com/playlist?list=PLfb6KneL63QsQ58tj-RkDCHRmheAofPJj) - A playlist with all of LongestSoloEver's guides to writing FNF music (except the 2 listed above for some reason).
### Chromatic Scale Guides
  - [How to MAKE CHROMATICS (Friday Night Funkin) - bbpanzu](https://www.youtube.com/watch?v=a7SGu1fNthc)
  - [EASY FNF chromatic guide! (Friday Night Funkin') - StickyBM](https://youtu.be/PlSh_LJwQD0)
  - [How to make FNF Chromatics in Ableton - LongestSoloEver](https://www.youtube.com/watch?v=QCA6-N-pW_0)

## Programming
### Engines
- [Friday Night Funkin'](https://github.com/FunkinCrew/funkin) - The original open source game by The Funkin' Crew.
- [Psych Engine](https://github.com/ShadowMario/FNF-PsychEngine) - A fork of base game which includes new quality-of-life changes, performance improvements, and Lua-based mod tools. Popular and well-documented. Famous mods built with it include Hazy River and Whitty: Definitive Edition.
- [Forever Engine](https://github.com/BeastlyGabi/Funkin-Forever-Engine) - An archive of a rewrite of the game, originally written by Yoshubs. Includes performance reworks, HScript support, and more. Famous mods built with it include Hypno's Lullaby v2 and Mario Bros Funk Mix.
  - Has three available versions: [Legacy](https://github.com/BeastlyGabi/Funkin-Forever-Engine/tree/legacy), [1.0 (not finished)](https://github.com/BeastlyGabi/Funkin-Forever-Engine/tree/rewrite) and [Hybrid (mix of Legacy and 1.0)](https://github.com/BeastlyGabi/Funkin-Forever-Engine/tree/hybrid).
- [Codename Engine](https://github.com/YoshiCrafter29/CodenameEngine) - A fork of base game which provides full HScript (Haxe Script) modding support without modifying the base source code, along with new editor interfaces and other improvments.
- [FNF LÖVE](https://github.com/Stilic/FNF-LOVE) - A Lua recreation of FNF within the LÖVE2D engine.
- [Funkin' Android](https://github.com/luckydog7/Funkin-android) - A fork of the game with controls and optimizations allowing it to be played on Android devices.
- [PSXFunkin](https://github.com/cuckydev/PSXFunkin) - A Playstation 1 de-make in C/C++
- [Altronix Engine](https://github.com/Altronix-Team/FNF-AltronixEngine) - An engine that provides the support for creating localizations into different languages and HScript modding support with Polymod HScript classes and small script files. Also engine has integration with GameJolt with achievements.
- [CrowEngine](https://github.com/EyeDaleHim/CrowEngine) - modified version of base Funkin' that has been rebuilt to include comprehensive documentation for modding and to introduce new features.
- Andromeda Engine - Andromeda Engine is a fork of Friday Night Funkin' with customization and gameplay in mind.
  - Has two available versions: [Legacy (more feature rich)](https://github.com/nebulazorua/andromeda-engine-legacy) and [2.0](https://github.com/nebulazorua/andromeda-2.0).
  - **NOTE: Andromeda 2.0 is in HEAVY development and is in a very early alpha stage**.
- [FNF-Benjine](https://github.com/this-is-bennyk/FNF-Benjine) - Funkin' but in Godot, made by [BennyK](https://github.com/this-is-bennyk) and was used for [Funkin' VR](https://github.com/this-is-bennyk/Funkin-VR).
- [FPS Plus](https://github.com/ThatRozebudDude/FPS-Plus-Public) - A fork of Funkin', as the name suggests, higher framerate, better input system, rebindable keys and more. [B-Side Redux](https://gamebanana.com/mods/42724) was made on this engine.

### Haxe/HaxeFlixel Resources
- [Haxe - Introduction](https://haxe.org/manual/introduction.html) - Introductory Haxe documentation.
- [HaxeFlixel - Introduction](https://haxeflixel.com/documentation/) - HaxeFlixel Documentation
- [HaxeFlixel Cheat Sheet](https://haxeflixel.com/documentation/cheat-sheet/) - Series of code examples and mini tutorials for common uses of HaxeFlixel
- [HaxeFlixel Demos](https://haxeflixel.com/demos/) - Collection of demos for HaxeFlixel.
  - [GitHub repository for abovementioned demos](https://github.com/HaxeFlixel/flixel-demos).
- [HaxeFlixel Game Development Tools](https://haxeflixel.com/documentation/game-development-tools/) - Tools that HaxeFlixel recommends for developing games.
- [HaxeFlixel Snippets](https://snippets.haxeflixel.com/) - Snippets of HaxeFlixel code with live demos to explain their functionality.
- [HaxeFlixel's Tutorial Game (TurnBasedRPG)](https://haxeflixel.com/documentation/tutorial/) - A really nifty tutorial that goes step-by-step on teaching how to make a game, comes with pre-made assets for you to use as well.
  - [GitHub source code for TurnBasedRPG](https://github.com/HaxeFlixel/flixel-demos/tree/dev/Tutorials/TurnBasedRPG).

### Visual Studio Code
- [Visual Studio Code](https://code.visualstudio.com/) is highly recommended, as it is the only integrated development environment (IDE) with proper support for Haxe (via extensions).
  - [Enable VSCode Debug Tools](https://twitter.com/EliteMasterEric/status/1535814918917734400) - A Twitter thread made by EliteMasterEric showing useful tips and tricks for Visual Studio Code.
- [Funkin' Script AutoComplete](https://github.com/Snirozu/Funkin-Script-AutoComplete) - A Visual Studio Code extension for Psych Engine you can use that will auto complete functions, variables etc. in your Lua script.

## Charting
- [ArrowVortex](https://arrowvortex.ddrnl.com/) - Create or edit stepfiles for various rhythm games, such as [DDR (Dance Dance Revolution)](https://www.ddrgame.com/), [ITG (In The Groove)](https://en.wikipedia.org/wiki/In_the_Groove_(video_game)), [PIU (Pump It Up)](https://www.piugame.com/piu.xx/), [StepMania](https://www.stepmania.com/) and [osu!](https://osu.ppy.sh/home) (it also includes Funkin' lol)
- [fnf-to-sm](https://github.com/Ashen-Haze/fnf-to-sm) - A fork of a [fork](https://github.com/KadeDev/fnf-to-sm) from the original [fnf-to-sm repository](https://github.com/shockdude/fnf-to-sm). Converts Funkin' .json charts to StepMania simfiles and vice versa.
  - Alternatively, using [version 1.7 of Kade Engine](https://github.com/KadeDev/Kade-Engine/releases/tag/1.7) also has a simfile to .json converter (and vice versa), however, it might be slower.

## Modding
- [GameBanana](https://gamebanana.com/games/8694) - GameBanana hosts a buncho damn mods and stuff
- [GameJolt](https://gamejolt.com/c/fnf) - Another highly used host for mods.
- [Funkipedia Mods Wiki](https://fridaynightfunking.fandom.com/wiki/Funkipedia_Mods_Wiki) - Information about most mods for Funkin'.
- [/funkg/pedia](https://funkinchan.club/wiki/Main_Page) - /funkg/ mod wiki.

### Modding Tutorials
- [Psych Engine Mod Installing Tutorial](https://www.youtube.com/watch?v=S-vC_kaWLPo&feature=youtu.be) - Shows you how to install mod packages within Psych Engine's `mods/` folder.
- [LongestSoloEver's Modding Tutorials](https://www.youtube.com/playlist?list=PLfb6KneL63QuD0T0lolMvkQPQM7ZPjy9n) - A series of tutorials going over how to make mods in its entirety.

## Bonus
### Engine Documentation
- [Psych Engine](https://github.com/ShadowMario/FNF-PsychEngine/wiki) - Psych Engine modding documentation (sorta outdated).
  - *Alternatively*, a more up-to-date Psych wiki exists, made by [CaptainBaldi](https://github.com/CaptainBaldi) and contributors, which you can view [here](https://github.com/CaptainBaldi/PsychRewrittenWiki/wiki).
- [Codename Engine](https://github.com/YoshiCrafter29/CodenameEngine/wiki) - Codename Engine modding documenation.

### Other Resources
- [Source Code Guide | OVERHAUL](https://gamebanana.com/tuts/13798) - That one famous GameBanana compile guide. Also includes tutorials, like adding songs, custom characters, etc. (**was originally targeted towards Funkin' 0.2.7.1**)

[FNF-NewgroundsPort](https://github.com/AngelDTF/FNF-NewgroundsPort) - Rebuild of Funkin' 0.2.8 via reverse engineering.
