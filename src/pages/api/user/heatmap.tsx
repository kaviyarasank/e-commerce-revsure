export default async function (req: any, res: any) {
  try {
    const data = [
      { g: 541, l: 85, count: 858 },
      { g: 937, l: 465, count: 299 },
      { g: 566, l: 131, count: 326 },
      { g: 738, l: 130, count: 262 },
      { g: 85, l: 207, count: 184 },
      { g: 321, l: 273, count: 312 },
      { g: 552, l: 153, count: 367 },
      { g: 698, l: 454, count: 194 },
      { g: 409, l: 440, count: 754 },
      { g: 905, l: 84, count: 891 },
      { g: 186, l: 127, count: 55 },
      { g: 636, l: 117, count: 97 },
      { g: 990, l: 29, count: 549 },
      { g: 284, l: 79, count: 570 },
      { g: 28, l: 313, count: 320 },
      { g: 146, l: 204, count: 206 },
      { g: 257, l: 327, count: 540 },
      { g: 277, l: 412, count: 766 },
      { g: 352, l: 343, count: 944 },
      { g: 875, l: 76, count: 789 },
      { g: 969, l: 160, count: 934 },
      { g: 909, l: 153, count: 779 },
      { g: 227, l: 194, count: 471 },
      { g: 618, l: 316, count: 400 },
      { g: 910, l: 98, count: 289 },
      { g: 718, l: 181, count: 409 },
      { g: 285, l: 448, count: 894 },
      { g: 89, l: 303, count: 567 },
      { g: 900, l: 195, count: 132 },
      { g: 780, l: 453, count: 741 },
      { g: 337, l: 243, count: 715 },
      { g: 156, l: 206, count: 720 },
      { g: 238, l: 11, count: 244 },
      { g: 303, l: 174, count: 320 },
      { g: 607, l: 234, count: 1 },
      { g: 460, l: 127, count: 176 },
      { g: 85, l: 435, count: 548 },
      { g: 938, l: 198, count: 423 },
      { g: 336, l: 387, count: 607 },
      { g: 331, l: 1, count: 535 },
      { g: 320, l: 342, count: 635 },
      { g: 620, l: 178, count: 345 },
      { g: 20, l: 475, count: 561 },
      { g: 878, l: 427, count: 375 },
      { g: 42, l: 412, count: 115 },
      { g: 383, l: 12, count: 422 },
      { g: 821, l: 442, count: 756 },
      { g: 737, l: 319, count: 676 },
      { g: 810, l: 180, count: 834 },
      { g: 45, l: 11, count: 552 },
      { g: 119, l: 422, count: 801 },
      { g: 634, l: 198, count: 816 },
      { g: 980, l: 168, count: 44 },
      { g: 595, l: 496, count: 188 },
      { g: 729, l: 100, count: 88 },
      { g: 635, l: 479, count: 362 },
      { g: 40, l: 384, count: 441 },
      { g: 334, l: 238, count: 231 },
      { g: 351, l: 362, count: 724 },
      { g: 70, l: 217, count: 816 },
      { g: 515, l: 245, count: 567 },
      { g: 842, l: 209, count: 703 },
      { g: 496, l: 226, count: 720 },
      { g: 998, l: 52, count: 863 },
      { g: 43, l: 51, count: 622 },
      { g: 253, l: 210, count: 610 },
      { g: 775, l: 491, count: 748 },
      { g: 766, l: 157, count: 804 },
      { g: 302, l: 202, count: 489 },
      { g: 463, l: 126, count: 761 },
      { g: 308, l: 88, count: 996 },
      { g: 432, l: 239, count: 247 },
      { g: 793, l: 96, count: 759 },
      { g: 297, l: 173, count: 428 },
      { g: 637, l: 437, count: 465 },
      { g: 296, l: 490, count: 667 },
      { g: 586, l: 172, count: 202 },
      { g: 435, l: 100, count: 103 },
      { g: 110, l: 399, count: 936 },
      { g: 130, l: 19, count: 36 },
      { g: 54, l: 442, count: 692 },
      { g: 106, l: 71, count: 770 },
      { g: 804, l: 365, count: 450 },
      { g: 106, l: 5, count: 264 },
      { g: 730, l: 139, count: 520 },
      { g: 305, l: 320, count: 888 },
      { g: 994, l: 230, count: 71 },
      { g: 503, l: 401, count: 408 },
      { g: 394, l: 210, count: 945 },
      { g: 142, l: 176, count: 85 },
      { g: 840, l: 470, count: 940 },
      { g: 649, l: 243, count: 872 },
      { g: 260, l: 427, count: 986 },
      { g: 403, l: 333, count: 522 },
      { g: 261, l: 174, count: 145 },
      { g: 581, l: 109, count: 877 },
      { g: 377, l: 363, count: 979 },
      { g: 242, l: 49, count: 85 },
      { g: 241, l: 201, count: 807 },
      { g: 859, l: 120, count: 167 },
      { g: 11, l: 413, count: 102 },
      { g: 866, l: 35, count: 642 },
      { g: 226, l: 288, count: 208 },
      { g: 578, l: 449, count: 27 },
      { g: 224, l: 386, count: 263 },
      { g: 909, l: 230, count: 342 },
      { g: 828, l: 252, count: 136 },
      { g: 246, l: 336, count: 825 },
      { g: 376, l: 227, count: 914 },
      { g: 416, l: 313, count: 318 },
      { g: 453, l: 184, count: 513 },
      { g: 633, l: 382, count: 486 },
      { g: 327, l: 188, count: 498 },
      { g: 617, l: 25, count: 193 },
      { g: 283, l: 224, count: 949 },
      { g: 400, l: 18, count: 533 },
      { g: 948, l: 123, count: 57 },
      { g: 514, l: 477, count: 663 },
      { g: 532, l: 405, count: 225 },
      { g: 723, l: 357, count: 743 },
      { g: 810, l: 170, count: 57 },
      { g: 362, l: 275, count: 371 },
      { g: 642, l: 421, count: 48 },
      { g: 934, l: 431, count: 622 },
      { g: 45, l: 39, count: 642 },
      { g: 401, l: 401, count: 660 },
      { g: 678, l: 257, count: 225 },
      { g: 696, l: 201, count: 854 },
      { g: 807, l: 372, count: 673 },
      { g: 119, l: 402, count: 474 },
      { g: 498, l: 142, count: 414 },
      { g: 900, l: 338, count: 10 },
      { g: 176, l: 143, count: 577 },
      { g: 909, l: 134, count: 427 },
      { g: 42, l: 443, count: 247 },
      { g: 667, l: 97, count: 860 },
      { g: 497, l: 463, count: 842 },
      { g: 252, l: 364, count: 853 },
      { g: 191, l: 40, count: 501 },
      { g: 471, l: 334, count: 913 },
      { g: 877, l: 157, count: 70 },
      { g: 198, l: 24, count: 131 },
      { g: 709, l: 434, count: 110 },
      { g: 740, l: 352, count: 658 },
      { g: 406, l: 322, count: 716 },
      { g: 304, l: 288, count: 718 },
      { g: 765, l: 241, count: 374 },
      { g: 566, l: 224, count: 299 },
      { g: 316, l: 284, count: 147 },
      { g: 167, l: 213, count: 783 },
      { g: 550, l: 314, count: 903 },
      { g: 10, l: 266, count: 175 },
      { g: 711, l: 408, count: 938 },
      { g: 691, l: 338, count: 274 },
      { g: 523, l: 36, count: 298 },
      { g: 910, l: 17, count: 201 },
      { g: 40, l: 125, count: 91 },
      { g: 106, l: 233, count: 603 },
      { g: 297, l: 64, count: 165 },
      { g: 723, l: 178, count: 127 },
      { g: 785, l: 93, count: 614 },
      { g: 672, l: 465, count: 63 },
      { g: 843, l: 301, count: 507 },
      { g: 766, l: 450, count: 647 },
      { g: 84, l: 225, count: 358 },
      { g: 947, l: 478, count: 131 },
      { g: 202, l: 455, count: 193 },
      { g: 548, l: 399, count: 819 },
      { g: 199, l: 62, count: 182 },
      { g: 362, l: 229, count: 277 },
      { g: 704, l: 358, count: 428 },
      { g: 124, l: 24, count: 414 },
      { g: 655, l: 363, count: 213 },
      { g: 897, l: 184, count: 37 },
      { g: 727, l: 296, count: 667 },
      { g: 299, l: 305, count: 23 },
      { g: 920, l: 39, count: 776 },
      { g: 822, l: 195, count: 400 },
      { g: 694, l: 229, count: 770 },
      { g: 886, l: 342, count: 485 },
      { g: 757, l: 375, count: 441 },
      { g: 730, l: 170, count: 595 },
      { g: 734, l: 238, count: 580 },
      { g: 671, l: 11, count: 979 },
      { g: 688, l: 37, count: 685 },
      { g: 310, l: 492, count: 576 },
      { g: 245, l: 488, count: 683 },
      { g: 378, l: 293, count: 553 },
      { g: 783, l: 45, count: 573 },
      { g: 948, l: 93, count: 351 },
      { g: 921, l: 17, count: 893 },
      { g: 539, l: 372, count: 232 },
      { g: 555, l: 31, count: 424 },
      { g: 282, l: 435, count: 336 },
      { g: 334, l: 305, count: 928 },
      { g: 33, l: 160, count: 644 },
      { g: 610, l: 446, count: 123 },
      { g: 750, l: 209, count: 856 },
      { g: 257, l: 259, count: 990 },
      { g: 815, l: 21, count: 461 },
      { g: 351, l: 130, count: 625 },
      { g: 406, l: 367, count: 344 },
      { g: 26, l: 207, count: 786 },
      { g: 814, l: 93, count: 93 },
      { g: 218, l: 311, count: 981 },
      { g: 394, l: 310, count: 130 },
      { g: 767, l: 110, count: 838 },
      { g: 741, l: 369, count: 23 },
      { g: 988, l: 241, count: 109 },
      { g: 273, l: 80, count: 516 },
      { g: 487, l: 457, count: 817 },
      { g: 245, l: 135, count: 128 },
      { g: 424, l: 228, count: 517 },
      { g: 818, l: 219, count: 385 },
      { g: 512, l: 225, count: 608 },
      { g: 482, l: 113, count: 352 },
      { g: 598, l: 148, count: 755 },
      { g: 484, l: 168, count: 471 },
      { g: 739, l: 187, count: 583 },
      { g: 484, l: 363, count: 820 },
      { g: 99, l: 61, count: 891 },
      { g: 121, l: 340, count: 904 },
      { g: 968, l: 321, count: 554 },
      { g: 851, l: 474, count: 482 },
      { g: 998, l: 414, count: 133 },
      { g: 980, l: 21, count: 911 },
      { g: 519, l: 381, count: 99 },
      { g: 707, l: 55, count: 651 },
      { g: 563, l: 422, count: 5 },
      { g: 23, l: 495, count: 421 },
      { g: 613, l: 477, count: 557 },
      { g: 735, l: 432, count: 314 },
      { g: 441, l: 161, count: 447 },
      { g: 896, l: 327, count: 30 },
      { g: 673, l: 58, count: 826 },
      { g: 346, l: 165, count: 68 },
      { g: 451, l: 225, count: 116 },
      { g: 981, l: 301, count: 50 },
      { g: 141, l: 354, count: 922 },
      { g: 759, l: 301, count: 350 },
      { g: 521, l: 145, count: 193 },
      { g: 873, l: 441, count: 470 },
      { g: 794, l: 41, count: 990 },
      { g: 545, l: 302, count: 70 },
      { g: 241, l: 98, count: 81 },
      { g: 271, l: 495, count: 179 },
      { g: 910, l: 190, count: 678 },
      { g: 727, l: 380, count: 275 },
      { g: 310, l: 133, count: 523 },
      { g: 839, l: 474, count: 324 },
      { g: 16, l: 453, count: 842 },
      { g: 402, l: 80, count: 634 },
      { g: 953, l: 370, count: 261 },
      { g: 440, l: 369, count: 109 },
      { g: 887, l: 184, count: 239 },
      { g: 309, l: 105, count: 303 },
      { g: 63, l: 360, count: 199 },
      { g: 999, l: 455, count: 141 },
      { g: 928, l: 257, count: 572 },
      { g: 750, l: 3, count: 18 },
      { g: 266, l: 309, count: 350 },
      { g: 40, l: 52, count: 588 },
      { g: 448, l: 203, count: 256 },
      { g: 283, l: 264, count: 125 },
      { g: 238, l: 31, count: 231 },
      { g: 819, l: 461, count: 669 },
      { g: 84, l: 22, count: 796 },
      { g: 605, l: 284, count: 296 },
      { g: 431, l: 86, count: 21 },
      { g: 926, l: 182, count: 552 },
      { g: 195, l: 468, count: 526 },
      { g: 807, l: 188, count: 764 },
      { g: 816, l: 326, count: 696 },
      { g: 314, l: 125, count: 648 },
      { g: 952, l: 50, count: 999 },
      { g: 894, l: 112, count: 454 },
      { g: 670, l: 437, count: 440 },
      { g: 878, l: 494, count: 637 },
      { g: 259, l: 278, count: 871 },
      { g: 461, l: 449, count: 264 },
      { g: 15, l: 50, count: 17 },
      { g: 770, l: 151, count: 622 },
      { g: 167, l: 59, count: 387 },
      { g: 315, l: 412, count: 907 },
      { g: 393, l: 110, count: 162 },
      { g: 197, l: 71, count: 394 },
      { g: 306, l: 354, count: 183 },
      { g: 593, l: 113, count: 736 },
      { g: 214, l: 249, count: 611 },
      { g: 214, l: 78, count: 589 },
      { g: 521, l: 218, count: 571 },
      { g: 149, l: 299, count: 939 },
      { g: 841, l: 379, count: 510 },
      { g: 197, l: 127, count: 355 },
      { g: 187, l: 340, count: 356 },
      { g: 793, l: 171, count: 138 },
      { g: 340, l: 184, count: 597 },
      { g: 702, l: 317, count: 313 },
      { g: 439, l: 383, count: 217 },
      { g: 337, l: 137, count: 251 },
      { g: 916, l: 99, count: 703 },
      { g: 636, l: 405, count: 524 },
      { g: 203, l: 234, count: 478 },
      { g: 36, l: 138, count: 928 },
      { g: 876, l: 20, count: 636 },
      { g: 790, l: 97, count: 553 },
      { g: 551, l: 73, count: 74 },
      { g: 258, l: 296, count: 766 },
      { g: 278, l: 219, count: 387 },
      { g: 540, l: 309, count: 422 },
      { g: 686, l: 418, count: 577 },
      { g: 192, l: 184, count: 625 },
      { g: 921, l: 317, count: 593 },
      { g: 544, l: 24, count: 911 },
      { g: 699, l: 344, count: 381 },
      { g: 416, l: 92, count: 334 },
      { g: 233, l: 60, count: 462 },
      { g: 157, l: 377, count: 642 },
      { g: 937, l: 483, count: 890 },
      { g: 501, l: 402, count: 277 },
      { g: 246, l: 270, count: 467 },
      { g: 433, l: 118, count: 427 },
      { g: 788, l: 499, count: 214 },
      { g: 706, l: 332, count: 164 },
      { g: 366, l: 315, count: 909 },
      { g: 392, l: 272, count: 755 },
      { g: 817, l: 393, count: 512 },
      { g: 192, l: 189, count: 237 },
      { g: 761, l: 50, count: 361 },
      { g: 600, l: 267, count: 783 },
      { g: 911, l: 369, count: 579 },
      { g: 55, l: 206, count: 299 },
      { g: 646, l: 92, count: 5 },
      { g: 587, l: 311, count: 213 },
      { g: 87, l: 428, count: 206 },
      { g: 753, l: 87, count: 804 },
      { g: 454, l: 483, count: 996 },
      { g: 906, l: 268, count: 708 },
      { g: 885, l: 179, count: 99 },
      { g: 549, l: 274, count: 734 },
      { g: 348, l: 154, count: 997 },
      { g: 672, l: 319, count: 941 },
      { g: 415, l: 118, count: 901 },
      { g: 390, l: 252, count: 580 },
      { g: 532, l: 346, count: 216 },
      { g: 878, l: 19, count: 669 },
      { g: 326, l: 309, count: 797 },
      { g: 496, l: 497, count: 348 },
      { g: 243, l: 189, count: 725 },
      { g: 140, l: 310, count: 396 },
      { g: 343, l: 433, count: 472 },
      { g: 342, l: 133, count: 969 },
      { g: 947, l: 137, count: 966 },
      { g: 710, l: 423, count: 231 },
      { g: 770, l: 296, count: 43 },
      { g: 557, l: 173, count: 268 },
      { g: 66, l: 178, count: 392 },
      { g: 960, l: 455, count: 266 },
      { g: 225, l: 147, count: 396 },
      { g: 679, l: 384, count: 211 },
      { g: 757, l: 66, count: 94 },
      { g: 456, l: 206, count: 120 },
      { g: 644, l: 111, count: 767 },
      { g: 387, l: 276, count: 587 },
      { g: 669, l: 409, count: 43 },
      { g: 752, l: 462, count: 802 },
      { g: 829, l: 75, count: 445 },
      { g: 263, l: 282, count: 423 },
      { g: 761, l: 496, count: 771 },
      { g: 830, l: 492, count: 117 },
      { g: 740, l: 92, count: 355 },
      { g: 840, l: 339, count: 311 },
      { g: 964, l: 196, count: 332 },
      { g: 439, l: 289, count: 638 },
      { g: 316, l: 194, count: 851 },
      { g: 833, l: 178, count: 680 },
      { g: 694, l: 458, count: 876 },
      { g: 793, l: 305, count: 777 },
      { g: 273, l: 363, count: 585 },
      { g: 194, l: 356, count: 619 },
      { g: 225, l: 56, count: 520 },
      { g: 658, l: 342, count: 123 },
      { g: 940, l: 464, count: 572 },
      { g: 500, l: 181, count: 629 },
      { g: 100, l: 60, count: 283 },
      { g: 236, l: 263, count: 129 },
      { g: 656, l: 395, count: 320 },
      { g: 134, l: 306, count: 629 },
      { g: 87, l: 79, count: 488 },
      { g: 815, l: 433, count: 462 },
      { g: 803, l: 223, count: 610 },
      { g: 300, l: 68, count: 641 },
      { g: 468, l: 133, count: 827 },
      { g: 309, l: 147, count: 955 },
      { g: 691, l: 215, count: 796 },
      { g: 549, l: 481, count: 391 },
      { g: 776, l: 29, count: 859 },
      { g: 420, l: 478, count: 960 },
      { g: 927, l: 7, count: 396 },
      { g: 475, l: 160, count: 234 },
      { g: 330, l: 463, count: 468 },
      { g: 484, l: 206, count: 159 },
      { g: 233, l: 245, count: 345 },
      { g: 143, l: 144, count: 664 },
      { g: 780, l: 247, count: 946 },
      { g: 289, l: 391, count: 564 },
      { g: 959, l: 183, count: 460 },
      { g: 923, l: 192, count: 48 },
      { g: 494, l: 318, count: 795 },
      { g: 301, l: 20, count: 737 },
      { g: 926, l: 135, count: 941 },
      { g: 164, l: 268, count: 385 },
      { g: 197, l: 318, count: 763 },
      { g: 921, l: 325, count: 171 },
      { g: 614, l: 464, count: 192 },
      { g: 195, l: 103, count: 822 },
      { g: 399, l: 261, count: 473 },
      { g: 928, l: 410, count: 359 },
      { g: 746, l: 77, count: 574 },
      { g: 362, l: 422, count: 833 },
      { g: 23, l: 83, count: 615 },
      { g: 445, l: 295, count: 682 },
      { g: 177, l: 8, count: 976 },
      { g: 740, l: 448, count: 840 },
      { g: 95, l: 265, count: 208 },
      { g: 423, l: 278, count: 145 },
      { g: 336, l: 255, count: 42 },
      { g: 718, l: 207, count: 806 },
      { g: 669, l: 171, count: 124 },
      { g: 235, l: 64, count: 978 },
      { g: 945, l: 167, count: 749 },
      { g: 280, l: 294, count: 165 },
      { g: 979, l: 0, count: 745 },
      { g: 3, l: 101, count: 646 },
      { g: 611, l: 91, count: 990 },
      { g: 966, l: 97, count: 778 },
      { g: 335, l: 51, count: 487 },
      { g: 562, l: 354, count: 171 },
      { g: 261, l: 161, count: 377 },
      { g: 178, l: 309, count: 813 },
      { g: 726, l: 344, count: 208 },
      { g: 801, l: 194, count: 854 },
      { g: 25, l: 136, count: 703 },
      { g: 218, l: 210, count: 849 },
      { g: 181, l: 19, count: 311 },
      { g: 522, l: 392, count: 282 },
      { g: 875, l: 360, count: 260 },
      { g: 978, l: 481, count: 389 },
      { g: 885, l: 335, count: 294 },
      { g: 218, l: 270, count: 566 },
      { g: 362, l: 316, count: 349 },
      { g: 95, l: 359, count: 674 },
      { g: 767, l: 184, count: 985 },
      { g: 791, l: 378, count: 827 },
      { g: 799, l: 426, count: 716 },
      { g: 437, l: 183, count: 409 },
      { g: 305, l: 85, count: 451 },
      { g: 859, l: 357, count: 382 },
      { g: 90, l: 61, count: 621 },
      { g: 933, l: 347, count: 62 },
      { g: 693, l: 208, count: 123 },
      { g: 304, l: 222, count: 809 },
      { g: 72, l: 243, count: 116 },
      { g: 657, l: 9, count: 441 },
      { g: 65, l: 199, count: 147 },
      { g: 503, l: 208, count: 86 },
      { g: 257, l: 274, count: 221 },
      { g: 879, l: 32, count: 269 },
      { g: 979, l: 432, count: 344 },
      { g: 948, l: 52, count: 80 },
      { g: 973, l: 181, count: 811 },
      { g: 584, l: 438, count: 394 },
      { g: 645, l: 357, count: 89 },
      { g: 387, l: 457, count: 20 },
      { g: 686, l: 240, count: 829 },
      { g: 419, l: 185, count: 722 },
      { g: 869, l: 365, count: 455 },
      { g: 376, l: 434, count: 586 },
      { g: 219, l: 418, count: 619 },
      { g: 458, l: 186, count: 808 },
      { g: 26, l: 427, count: 922 },
      { g: 61, l: 116, count: 688 },
      { g: 247, l: 243, count: 645 },
      { g: 990, l: 93, count: 844 },
      { g: 757, l: 273, count: 81 },
      { g: 396, l: 387, count: 15 },
      { g: 518, l: 425, count: 268 },
      { g: 246, l: 48, count: 423 },
      { g: 841, l: 426, count: 530 },
      { g: 844, l: 69, count: 571 },
      { g: 818, l: 31, count: 27 },
      { g: 248, l: 180, count: 168 },
      { g: 251, l: 185, count: 462 },
      { g: 727, l: 57, count: 15 },
      { g: 636, l: 175, count: 7 },
      { g: 310, l: 127, count: 494 },
      { g: 380, l: 442, count: 609 },
      { g: 923, l: 192, count: 43 },
      { g: 161, l: 487, count: 817 },
      { g: 596, l: 320, count: 718 },
    ];
    return res.send({
      data: data,
      message: "data fetched successfully",
      status: true,
    });
  } catch (error) {
    res.send({
      message: error,
      status: false,
    });
  }
}
