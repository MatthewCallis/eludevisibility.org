---
layout: post
title: Granhistoria - Genshi Sekaiki (Japan) (Sample)
date: 2016-04-23 11:00:00
slug: granhistoria-genshi-sekaiki-sample
category: Super Famicom
author: matthew_callis
download:
 title: Granhistoria - Genshi Sekaiki (Japan) (Sample)
 filename: sfc/granhistoria-genshi-sekaiki-sample.7z
---

__[グランヒストリア 〜幻史世界記〜](https://superfamicom.org/info/granhistoria-genshi-sekaiki)__

A very early, sample cart. Claiming to be 75% complete on the cart label. From May 16th, with a planned release date of May 31st, which it also didn't make as it was released on June 30th, 1995.

Some quick differences are the Debug Mode, and new added text styles and word choices in the final version. The ROM has an internal header at `0x7FD8` of `GRANHISTORIA` but the ROM, dumped many times with the same checksum, is insisting it is HiROM and not LoROM.

```
---------------------Internal ROM Info----------------------
       File: Granhistoria - Genshi Sekaiki (Japan) (Sample).sfc
       Name: _________~___________    Company: Unlicensed
     Header: None                        Bank: HiROM
Interleaved: None                        SRAM: 262144 Kb
       Type: Normal                       ROM: 16 Mb
    Country: Unknown                    Video: NTSC
  ROM Speed: 120ns (FastROM)         Revision: 1.0
   Checksum: Corrupt, Bad 0xCE36    Game Code:
---------------------------Hashes---------------------------
      CRC32: D7415D06
        MD5: 1CAB1930BF771BDCDAB4999DBBD849F1
      SHA-1: 85502DB9F32E64472E40F122A081B64A8037F9CC
--------------------------Database--------------------------
    ROM wasn't found in the database (possible bad dump).

---------------------Internal ROM Info----------------------
       File: Granhistoria - Genshi Sekaiki (Japan).sfc
       Name: ｸﾞﾗﾝﾋｽﾄﾘｱ~ｹﾞﾝｼｾｶｲｷ~     Company: Banpresto
     Header: None                        Bank: LoROM
Interleaved: None                        SRAM: 64 Kb
       Type: Normal + Batt                ROM: 16 Mb
    Country: Japan                      Video: NTSC
  ROM Speed: 120ns (FastROM)         Revision: 1.0
   Checksum: Good 0xC717            Game Code: AIRJ
---------------------------Hashes---------------------------
      CRC32: 4AA7F384
        MD5: DCE9998F26DE33FA4FE5586D966A4478
      SHA-1: 9AC9496AAC5F5C2BAF277A918598B20260AA99B2
--------------------------Database--------------------------
       Name: Granhistoria
    Country: Japan                   Revision: 1.0
     Port 1: Gamepad                   Port 2: Gamepad
    Genre 1: RPG                      Genre 2: Unknown
```

_Title - Final_  / _Sample_

The title is different with the hero having a cape on and the logo letting not having a gradient as it does in in the final version.

_From [gh_ips_patch](https://twitter.com/gh_ips_patch/status/724553358703366144):_
電源ON直後のメーカーロゴ

Final：無音

Sample：ロゴの表示と同時に音楽が再生される。

{% include compare_local.html
    name_1='Title - Final'
    image_1='screenshots/granhistoria-genshi-sekaiki-sample/title.png'
    name_2='Title - Sample'
    image_2='screenshots/granhistoria-genshi-sekaiki-sample/title-sample.png'
%}

_Intro - Final_  / _Sample_

The intro wording has changed slightly, gone from less kanji to more kanji. They typeface itself is also slightly different. The color fades in and out and was caught mid animation.

_From [gh_ips_patch](https://twitter.com/gh_ips_patch/status/724554946620739585):_
OPデモに使われているシーン（映画の予告CMの様に、主要シーンがいくつか入る）が無い。歴史年表は、製品版とは別の場所を指していたりしています。

{% include compare_local.html
    name_1='Intro - Final'
    image_1='screenshots/granhistoria-genshi-sekaiki-sample/intro-1.png'
    name_2='Intro - Sample'
    image_2='screenshots/granhistoria-genshi-sekaiki-sample/intro-1-sample.png'
%}

_Dialog - Final  / Sample_

The dialog screen is slightly more centered in the final version.

{% include compare_local.html
    name_1='Dialog - Final'
    image_1='screenshots/granhistoria-genshi-sekaiki-sample/dialog.png'
    name_2='Dialog - Sample'
    image_2='screenshots/granhistoria-genshi-sekaiki-sample/dialog-sample.png'
%}

_Orbs - Final  / Sample_

The orbs have changed.

{% include compare_local.html
    name_1='Orbs - Final'
    image_1='screenshots/granhistoria-genshi-sekaiki-sample/orbs.png'
    name_2='Orbs - Sample'
    image_2='screenshots/granhistoria-genshi-sekaiki-sample/orbs-sample.png'
%}

_Name Entry - Final_  / _Sample_

The name entry is missing the numbers in the sample version.

{% include compare_local.html
    name_1='Name Entry - Final'
    image_1='screenshots/granhistoria-genshi-sekaiki-sample/name-entry.png'
    name_2='Name Entry - Sample'
    image_2='screenshots/granhistoria-genshi-sekaiki-sample/name-entry-sample.png'
%}

_Final_  / _Sample_

The game is very different, especially the intro routine, but how or what is happening I can't speak to. Hopefully someone knowledgable will chime in.

__Update: April 25th, 2016__ Some kind folks have chimed in!

_From [gh_ips_patch](https://twitter.com/gh_ips_patch/status/724622262704295936):_
歴史一覧の部分、製品版と結構違う（でもこれはストーリーが進行すると書き換わるので、イベントが減った/増えたとなる訳では無いと思う）

_From [gh_ips_patch](https://twitter.com/gh_ips_patch/status/724624358988083200):_
セリフは、違いが沢山ありすぎて書き出せません。推敲前の文章のような、荒削りな感じを受けます。

_From [gh_ips_patch](https://twitter.com/gh_ips_patch/status/724624624827289600):_
効果音が少ない。就寝時、回復アイテム使用時。

_From [gh_ips_patch](https://twitter.com/gh_ips_patch/status/724625426681749504):_
盗賊の森で盗賊と戦ったあと、製品版ではイベントになるのですが、サンプル版はタンドとガイナスターが出てきて連戦になります。あっさりとゲームオーバーになりました。

You can see more of work on typographic error restoration on their website, [「グランヒストリア～幻史世界記～」 誤植修正ips-patch配布所 （兼、製作記録）](http://granhistoria.x0.com/).

---

_From [Liana Kerr](https://twitter.com/lianaleslie):_

So far I just feel grateful they changed that blocky mess they were using for the typeface. There are minor differences in the text, such as changing "it's truly like a dream" to "I'm truly happy" and spacing it better. The major differences increase emotional impact or clarify. The scene where Toll (the blue haired guy) dies particularly. He walks away slowly, the way the text is spaced is more dramatic, he says his fiancée's name one more time (Lu). Instead of going straight to the name screen, Chronicle (white orb) explains that in this world you need a name. After naming, in the old version it reads "20 years until the end of the world" (the countdown continues through the game), Chronicle in the finished version explains that you've been granted 20 years, after which you can no longer stay in this world.

Which raises even more questions, but does count as some sort of clarification to what is a confusing intro sequence. The difference I found most interesting and showed how the emotional level was increased was when Red Sphere (RS) sees Lu. He is inhabiting her fiancée's body and they have an awkward conversation. He comments on her after she's gone.

Old: "Good night. So that was the girl who is to be married tomorrow?"

New: "So that's the girl Toll would have married tomorrow... Sleep well, poor girl..."

Which is one of the most poignant lines in the game, I think. So I'd imagine there's lines like that all over. From a cursory look at the villagers, they say the same things but their locations are different. So while the second screenshot you posted of talking to a villager looks very different, the content is just switched. The next big sequence also plays out a little more dramatically in the final version, though the content is about the same, because a bandit attack on a wedding to steal part of a mechanical god isn't complete without someone yelling "Die!".

Then there are several differences in the timeline and character list (select 世界記 from the menu to see both). Mostly minor; one minor character was cut from the final list, and a couple more were added. Some don't have final sprites, and there are some events shuffled around in the timeline, and some that aren't described. It's the saddest, most ambitious game from that era I can think of, and although it's flawed I love it.

There was a major change to the character screen -- the very last guy, Kain, never should have been there. It's a plot point that you don't know anything about him at the beginning of the game. So it's interesting he was there at all.

{% include compare_local.html
    name_1='Status - Final'
    image_1='screenshots/granhistoria-genshi-sekaiki-sample/status.png'
    name_2='Status - Sample'
    image_2='screenshots/granhistoria-genshi-sekaiki-sample/status-sample.png'
%}

{% include compare_local.html
    name_1='Post Death - Final'
    image_1='screenshots/granhistoria-genshi-sekaiki-sample/post-death.png'
    name_2='Post Death - Sample'
    image_2='screenshots/granhistoria-genshi-sekaiki-sample/post-death-sample.png'
%}

{% include compare_local.html
    name_1='Girl - Final'
    image_1='screenshots/granhistoria-genshi-sekaiki-sample/girl.png'
    name_2='Girl - Sample'
    image_2='screenshots/granhistoria-genshi-sekaiki-sample/girl-sample.png'
%}

{% include compare_local.html
    name_1='Man - Final'
    image_1='screenshots/granhistoria-genshi-sekaiki-sample/man.png'
    name_2='Man - Sample'
    image_2='screenshots/granhistoria-genshi-sekaiki-sample/man-sample.png'
%}

{% include compare_local.html
    name_1='Entry 1 - Final'
    image_1='screenshots/granhistoria-genshi-sekaiki-sample/entry-1.png'
    name_2='Entry 1 - Sample'
    image_2='screenshots/granhistoria-genshi-sekaiki-sample/entry-1-sample.png'
%}

{% include compare_local.html
    name_1='Entry 2 - Final'
    image_1='screenshots/granhistoria-genshi-sekaiki-sample/entry-2.png'
    name_2='Entry 2 - Sample'
    image_2='screenshots/granhistoria-genshi-sekaiki-sample/entry-2-sample.png'
%}

{% include compare_local.html
    name_1='Entry 2B - Final'
    image_1='screenshots/granhistoria-genshi-sekaiki-sample/entry-2-1.png'
    name_2='Entry 2B - Sample'
    image_2='screenshots/granhistoria-genshi-sekaiki-sample/entry-2-1-sample.png'
%}

_Debug Mode_

Hitting the `Y Button` cycles through maps, mostly breaking the actual game play but sometimes you can walk around and interact which is neat considering the game is hard to play without knowing Japanese.

![Debug Mode]({% asset_path 'screenshots/granhistoria-genshi-sekaiki-sample/debug-00.png' %} "Debug Mode")
![Debug Mode]({% asset_path 'screenshots/granhistoria-genshi-sekaiki-sample/debug-01.png' %} "Debug Mode")
![Debug Mode]({% asset_path 'screenshots/granhistoria-genshi-sekaiki-sample/debug-03.png' %} "Debug Mode")

![Debug Mode]({% asset_path 'screenshots/granhistoria-genshi-sekaiki-sample/debug-04.png' %} "Debug Mode")
![Debug Mode]({% asset_path 'screenshots/granhistoria-genshi-sekaiki-sample/debug-06.png' %} "Debug Mode")
![Debug Mode]({% asset_path 'screenshots/granhistoria-genshi-sekaiki-sample/debug-07.png' %} "Debug Mode")

![Debug Mode]({% asset_path 'screenshots/granhistoria-genshi-sekaiki-sample/debug-08.png' %} "Debug Mode")
![Debug Mode]({% asset_path 'screenshots/granhistoria-genshi-sekaiki-sample/debug-09.png' %} "Debug Mode")
![Debug Mode]({% asset_path 'screenshots/granhistoria-genshi-sekaiki-sample/debug-10.png' %} "Debug Mode")

![Debug Mode]({% asset_path 'screenshots/granhistoria-genshi-sekaiki-sample/debug-11.png' %} "Debug Mode")
![Debug Mode]({% asset_path 'screenshots/granhistoria-genshi-sekaiki-sample/debug-12.png' %} "Debug Mode")
![Debug Mode]({% asset_path 'screenshots/granhistoria-genshi-sekaiki-sample/debug-13.png' %} "Debug Mode")

![Debug Mode]({% asset_path 'screenshots/granhistoria-genshi-sekaiki-sample/debug-14.png' %} "Debug Mode")
![Debug Mode]({% asset_path 'screenshots/granhistoria-genshi-sekaiki-sample/debug-15.png' %} "Debug Mode")
![Debug Mode]({% asset_path 'screenshots/granhistoria-genshi-sekaiki-sample/debug-16.png' %} "Debug Mode")

If you happen to know the game well and find more differences, or can translate any of the screen shots above- [please update this post on GitHub](https://github.com/MatthewCallis/eludevisibility.org) or contact me!

![Granhistoria (Japan) (Sample) - Cart Front]({% asset_path 'Granhistoria (Japan) (Sample) - Cart Front.jpg' %} "Granhistoria (Japan) (Sample) - Cart Front")
