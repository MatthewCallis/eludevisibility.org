---
layout: post
title: Shounen Ninja Sasuke (Japan) (Sample)
date: 2016-04-30 21:00:00
slug: shounen-ninja-sasuke-japan-sample
category: Super Famicom
author: matthew_callis
download:
 title: Shounen Ninja Sasuke (Japan) (Sample)
 filename: sfc/shounen-ninja-sasuke-japan-sample.7z
---

__[少年忍者サスケ](https://superfamicom.org/info/shonen-ninja-sasuke)__

Identical except for the header to the `Beta` that has been circulating for a long time. More than anything it just confirms the `Beta` versions authenticity, as they rest of the file is identical, basically adding header details as seen below. This at least has a date of `1994-07-26` from an EEPROM label.

Not sure what the real differences are, it seemed very similar except everything noted below.

_Title - Final_  / _Sample_

The title is different by stopping a few pixels off and missing the copyright info.

{% include compare_local.html
    name_1='Title - Final'
    image_1='screenshots/shounen-ninja-sasuke-japan-sample/title.png'
    name_2='Title - Sample'
    image_2='screenshots/shounen-ninja-sasuke-japan-sample/title-sample.png'
%}

_Sample_

These appear to be the same as final, here for show.

![Dialog 1]({% asset_path 'screenshots/shounen-ninja-sasuke-japan-sample/dialog-1-sample.png' %})
![Dialog 2]({% asset_path 'screenshots/shounen-ninja-sasuke-japan-sample/dialog-2-sample.png' %})
![Dialog 3]({% asset_path 'screenshots/shounen-ninja-sasuke-japan-sample/dialog-3-sample.png' %})
![Dialog 4]({% asset_path 'screenshots/shounen-ninja-sasuke-japan-sample/dialog-4-sample.png' %})
![2 Player Screen]({% asset_path 'screenshots/shounen-ninja-sasuke-japan-sample/2-player-sample.png' %})

```
1: Replace 4 bytes at offset 0x7fb0 with 4 bytes
2: Insert 13 bytes at offset 0x7fc0
3: Delete 8 bytes at offset 0x7fc6
4: Delete 5 bytes at offset 0x7fd0
5: Replace 1 byte at offset 0x7fdc with 1 byte
6: Replace 1 byte at offset 0x7fde with 1 byte
```

```
---------------------Internal ROM Info----------------------
       File: Shounen Ninja Sasuke (Beta).sfc
       Name: SASUKE                   Company: Unlicensed
     Header: None                        Bank: LoROM
Interleaved: None                        SRAM: 64 Kb
       Type: Normal + Batt                ROM: 12 Mb
    Country: Japan                      Video: NTSC
  ROM Speed: 120ns (FastROM)         Revision: 1.0
   Checksum: Bad 0x36BD != 0x7A04   Game Code:     
---------------------------Hashes---------------------------
      CRC32: 316419D3
        MD5: 8CCA90891728B558962D2E012D859097
      SHA-1: 6A129CB34AD65CD91F4EB27D3F318C0B205AE9F3
--------------------------Database--------------------------
    ROM wasn't found in the database (possible bad dump).

---------------------Internal ROM Info----------------------
       File: Shounen Ninja Sasuke (Japan) (Sample).sfc
       Name: SHONEN NINJA SASUKE      Company: Sunsoft
     Header: None                        Bank: LoROM
Interleaved: None                        SRAM: 64 Kb
       Type: Normal + Batt                ROM: 12 Mb
    Country: Japan                      Video: NTSC
  ROM Speed: 120ns (FastROM)         Revision: 1.0
   Checksum: Bad 0x3930 != 0x7A01   Game Code: EO  
---------------------------Hashes---------------------------
      CRC32: B8A87C29
        MD5: 64B27EC10F5FD59D7A4E546EF951BCB3
      SHA-1: F6F8946B4BA0A88E8FD3511E1D6CAD51EB25E0B4
--------------------------Database--------------------------
    ROM wasn't found in the database (possible bad dump).

---------------------Internal ROM Info----------------------
       File: Shounen Ninja Sasuke (Japan).sfc
       Name: SHONEN NINJA SASUKE      Company: Sunsoft
     Header: None                        Bank: LoROM
Interleaved: None                        SRAM: 64 Kb
       Type: Normal + Batt                ROM: 12 Mb
    Country: Japan                      Video: NTSC
  ROM Speed: 120ns (FastROM)         Revision: 1.0
   Checksum: Good 0xEEFA            Game Code: EO  
---------------------------Hashes---------------------------
      CRC32: C2D10E95
        MD5: 8FE73BB73145A217BE9E610020B5FE35
      SHA-1: 7C20C21DA24876EFEFD4BA915929C265EBAA6CA5
--------------------------Database--------------------------
       Name: Shounen Ninja Sasuke
    Country: Japan                   Revision: 1.0
     Port 1: Gamepad                   Port 2: Gamepad
    Genre 1: Fighting                 Genre 2: Brawler
```

If you happen to know the game well and find more differences, or can translate any of the screen shots above- [please update this post on GitHub](https://github.com/MatthewCallis/eludevisibility.org) or contact me!

![Shounen Ninja Sasuke (Japan) (Sample) - PCB Front]({% asset_path 'Shounen Ninja Sasuke (Japan) (Sample) - PCB Front.jpg' %} "Shounen Ninja Sasuke (Japan) (Sample) - PCB Front")
![Shounen Ninja Sasuke (Japan) (Sample) - PCB Back]({% asset_path 'Shounen Ninja Sasuke (Japan) (Sample) - PCB Back.jpg' %} "Shounen Ninja Sasuke (Japan) (Sample) - PCB Back")
