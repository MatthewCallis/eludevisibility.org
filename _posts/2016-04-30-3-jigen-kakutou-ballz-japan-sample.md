---
layout: post
title: 3 Jigen Kakutou Ballz (Japan) (Sample)
date: 2016-04-30 20:00:00
slug: 3-jigen-kakutou-ballz-japan-sample
category: Super Famicom
author: matthew_callis
thumbnail: screenshots/3-jigen-kakutou-ballz-japan-sample/title-sample.png
download:
 title: 3 Jigen Kakutou Ballz (Japan) (Sample)
 filename: sfc/3-jigen-kakutou-ballz-japan-sample.7z
---

__[3次元格闘ボールズ](https://superfamicom.org/info/3-jigen-kakutou-ballz)__

This is the same version that has been around for a while, this is just a verification of it with board scan. The sample is missing the `OPTIONS` option.

{% include compare_local.html
    name_1='Title - Final'
    image_1='screenshots/3-jigen-kakutou-ballz-japan-sample/title.png'
    name_2='Title - Sample'
    image_2='screenshots/3-jigen-kakutou-ballz-japan-sample/title-sample.png'
%}

Differences between this and final are few, with the biggest (hex) at the end being nulled out in the final:

```
1: Replace 1 byte at offset 0x1d1e with 1 byte
2: Insert 1 byte at offset 0x1d39
3: Delete 1 byte at offset 0x1d3a
4: Insert 9 bytes at offset 0x1df1
5: Delete 9 bytes at offset 0x1df2
6: Replace 12 bytes at offset 0x1f30 with 12 bytes
7: Replace 1 byte at offset 0x7cb8b with 1 byte
8: Replace 63 bytes at offset 0xfff00 with 19 bytes
9: Insert 32 bytes at offset 0xfff14
```

```
---------------------Internal ROM Info----------------------
       File: 3 Jigen Kakutou Ballz (Japan) (Sample).sfc
       Name: Ballz                    Company: Media Rings Corp.
     Header: None                        Bank: HiROM
Interleaved: None                        SRAM: 0 Kb
       Type: DSP-1                        ROM: 8 Mb
    Country: Japan                      Video: NTSC
  ROM Speed: 200ns (SlowROM)         Revision: 1.0
   Checksum: Bad 0x9F71 != 0xC0BB   Game Code: ABZJ
---------------------------Hashes---------------------------
      CRC32: FFF8C139
        MD5: 56F5C0F9559AE498E5C1FC0AF59A6C97
      SHA-1: 39AB72CFCB4B14129574069CCE200DE63F26CC8B
--------------------------Database--------------------------
       Name: 3 Jigen Kakutou Ballz (Sample)
    Country: Japan                   Revision: 1.0
     Port 1: Gamepad                   Port 2: Gamepad
    Genre 1: Unknown                  Genre 2: None

---------------------Internal ROM Info----------------------
       File: Ballz 3D (J) [!].sfc
       Name: Ballz                    Company: Media Rings Corp.
     Header: None                        Bank: HiROM
Interleaved: None                        SRAM: 0 Kb
       Type: DSP-1                        ROM: 8 Mb
    Country: Japan                      Video: NTSC
  ROM Speed: 200ns (SlowROM)         Revision: 1.0
   Checksum: Good 0xC0BB            Game Code: ABZJ
---------------------------Hashes---------------------------
      CRC32: F0810694
        MD5: 5403A00958BCB9A3D3FD714C48115E7E
      SHA-1: 0CACA71401B96B3AB42EC89E9BCF7AF82B1BD3D4
--------------------------Database--------------------------
       Name: 3 Jigen Kakutou Ballz
    Country: Japan                   Revision: 1.0
     Port 1: Gamepad                   Port 2: Gamepad
    Genre 1: Unknown                  Genre 2: None
```

If you happen to know the game well and know the differences between these two, [please update this post on GitHub](https://github.com/MatthewCallis/eludevisibility.org) or contact me!

![3 Jigen Kakutou Ballz (Japan) (Sample) - PCB Front]({% asset_path '3 Jigen Kakutou Ballz (Japan) (Sample) - PCB Front.jpg' %} "3 Jigen Kakutou Ballz (Japan) (Sample) - PCB Front")
![3 Jigen Kakutou Ballz (Japan) (Sample) - PCB Back]({% asset_path '3 Jigen Kakutou Ballz (Japan) (Sample) - PCB Back.jpg' %} "3 Jigen Kakutou Ballz (Japan) (Sample) - PCB Back")
