// Copyright (c) Microsoft Corporation.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception

'use strict';
const weekly_table = [
    { date: '2017-06-09', cxx17: 17, lwg: 44, vso: 247, libcxx: 526 },
    { date: '2017-06-16', cxx17: 17, lwg: 43, vso: 246, libcxx: 526 },
    { date: '2017-06-23', cxx17: 17, lwg: 43, vso: 249, libcxx: 517 },
    { date: '2017-06-30', cxx17: 16, lwg: 42, vso: 247, libcxx: 518 },
    { date: '2017-07-07', cxx17: 15, lwg: 44, vso: 251, libcxx: 518 },
    { date: '2017-07-14', cxx17: 13, cxx20: 0, lwg: 42, vso: 254, libcxx: 519 },
    { date: '2017-07-21', cxx17: 12, cxx20: 2, lwg: 48, vso: 257, libcxx: 524 },
    { date: '2017-07-28', cxx17: 12, cxx20: 2, lwg: 48, vso: 261, libcxx: 525 },
    { date: '2017-08-04', cxx17: 10, cxx20: 2, lwg: 46, vso: 263, libcxx: 524 },
    { date: '2017-08-11', cxx17: 10, cxx20: 2, lwg: 46, vso: 263, libcxx: 494 },
    { date: '2017-08-18', cxx17: 10, cxx20: 2, lwg: 46, vso: 267, libcxx: 494 },
    { date: '2017-08-25', cxx17: 10, cxx20: 2, lwg: 46, vso: 266, libcxx: 494 },
    { date: '2017-09-01', cxx17: 10, cxx20: 2, lwg: 46, vso: 271, libcxx: 494 },
    { date: '2017-09-08', cxx17: 9, cxx20: 2, lwg: 46, vso: 274, libcxx: 494 },
    { date: '2017-09-15', cxx17: 9, cxx20: 2, lwg: 46, vso: 278, libcxx: 494 },
    { date: '2017-09-22', cxx17: 8, cxx20: 2, lwg: 46, vso: 279, libcxx: 494 },
    { date: '2017-09-29', cxx17: 8, cxx20: 2, lwg: 46, vso: 279, libcxx: 479 },
    { date: '2017-10-06', cxx17: 8, cxx20: 2, lwg: 46, vso: 281, libcxx: 481 },
    { date: '2017-10-13', cxx17: 8, cxx20: 2, lwg: 46, vso: 282, libcxx: 480 },
    { date: '2017-10-20', cxx17: 7, cxx20: 2, lwg: 46, vso: 284, libcxx: 485 },
    { date: '2017-10-27', cxx17: 7, cxx20: 2, lwg: 46, vso: 285, libcxx: 486 },
    { date: '2017-11-03', cxx17: 6, cxx20: 2, lwg: 46, vso: 283, libcxx: 487 },
    { date: '2017-11-10', cxx17: 6, cxx20: 2, lwg: 55, vso: 284, libcxx: 487 },
    { date: '2017-11-17', cxx17: 6, cxx20: 15, lwg: 55, vso: 285, libcxx: 487 },
    { date: '2017-11-24', cxx17: 5, cxx20: 15, lwg: 52, vso: 291, libcxx: 489 },
    { date: '2017-12-01', cxx17: 5, cxx20: 15, lwg: 52, vso: 288, libcxx: 489 },
    { date: '2017-12-08', cxx17: 5, cxx20: 15, lwg: 52, vso: 289, libcxx: 515 },
    { date: '2017-12-15', cxx17: 5, cxx20: 15, lwg: 52, vso: 287, libcxx: 506 },
    { date: '2018-01-05', cxx17: 5, cxx20: 15, lwg: 52, vso: 271, libcxx: 507 },
    { date: '2018-01-12', cxx17: 5, cxx20: 15, lwg: 52, vso: 266, libcxx: 497 },
    { date: '2018-01-19', cxx17: 5, cxx20: 15, lwg: 52, vso: 268, libcxx: 497 },
    { date: '2018-01-26', cxx17: 5, cxx20: 15, lwg: 52, vso: 269, libcxx: 497 },
    { date: '2018-02-02', cxx17: 5, cxx20: 15, lwg: 52, vso: 268, libcxx: 497 },
    { date: '2018-02-09', cxx17: 5, cxx20: 15, lwg: 52, vso: 271, libcxx: 497 },
    { date: '2018-02-16', cxx17: 4, cxx20: 15, lwg: 49, vso: 269, libcxx: 497 },
    { date: '2018-02-23', cxx17: 4, cxx20: 15, lwg: 49, vso: 264, libcxx: 497 },
    { date: '2018-03-02', cxx17: 4, cxx20: 15, lwg: 49, vso: 263, libcxx: 506 },
    { date: '2018-03-09', cxx17: 2, cxx20: 15, lwg: 22, vso: 263, libcxx: 505 },
    { date: '2018-03-16', cxx17: 1, cxx20: 15, lwg: 19, vso: 261, libcxx: 505 },
    { date: '2018-03-23', cxx17: 1, cxx20: 20, lwg: 20, vso: 263, libcxx: 490 },
    { date: '2018-03-30', cxx17: 1, cxx20: 20, lwg: 15, vso: 249, libcxx: 477 },
    { date: '2018-04-06', cxx17: 1, cxx20: 20, lwg: 15, vso: 241, libcxx: 477 },
    { date: '2018-04-13', cxx17: 1, cxx20: 20, lwg: 13, vso: 234, libcxx: 458 },
    { date: '2018-04-20', cxx17: 1, cxx20: 20, lwg: 12, vso: 210, libcxx: 454 },
    { date: '2018-04-27', cxx17: 1, cxx20: 20, lwg: 6, vso: 208, libcxx: 419 },
    { date: '2018-05-04', cxx17: 1, cxx20: 20, lwg: 6, vso: 208, libcxx: 418 },
    { date: '2018-05-11', cxx17: 1, cxx20: 20, lwg: 6, vso: 206, libcxx: 420 },
    { date: '2018-05-18', cxx17: 1, cxx20: 20, lwg: 3, vso: 203, libcxx: 411 },
    { date: '2018-05-25', cxx17: 1, cxx20: 20, lwg: 2, vso: 205, libcxx: 410 },
    { date: '2018-06-01', cxx17: 1, cxx20: 20, lwg: 1, vso: 205, libcxx: 409 },
    { date: '2018-06-08', cxx17: 1, cxx20: 20, lwg: 1, vso: 205, libcxx: 409 },
    { date: '2018-06-15', cxx17: 1, cxx20: 35, lwg: 2, vso: 206, libcxx: 410 },
    { date: '2018-06-22', cxx17: 1, cxx20: 35, lwg: 2, vso: 208, libcxx: 410 },
    { date: '2018-06-29', cxx17: 1, cxx20: 35, lwg: 2, vso: 210, libcxx: 410 },
    { date: '2018-07-06', cxx17: 1, cxx20: 35, lwg: 2, vso: 212, libcxx: 410 },
    { date: '2018-07-13', cxx17: 1, cxx20: 35, lwg: 2, vso: 213, libcxx: 410 },
    { date: '2018-07-20', cxx17: 1, cxx20: 35, lwg: 2, vso: 215, libcxx: 410 },
    { date: '2018-07-27', cxx17: 1, cxx20: 34, lwg: 2, vso: 216, libcxx: 410 },
    { date: '2018-08-03', cxx17: 1, cxx20: 34, lwg: 2, vso: 216, libcxx: 410 },
    { date: '2018-08-10', cxx17: 1, cxx20: 34, lwg: 2, vso: 216, libcxx: 533 },
    { date: '2018-08-17', cxx17: 1, cxx20: 34, lwg: 2, vso: 216, libcxx: 535 },
    { date: '2018-08-24', cxx17: 1, cxx20: 34, lwg: 2, vso: 217, libcxx: 535 },
    { date: '2018-08-31', cxx17: 1, cxx20: 34, lwg: 2, vso: 218, libcxx: 530 },
    { date: '2018-09-07', cxx17: 1, cxx20: 34, lwg: 2, vso: 219, libcxx: 530 },
    { date: '2018-09-14', cxx17: 1, cxx20: 34, lwg: 2, vso: 220, libcxx: 530 },
    { date: '2018-09-21', cxx17: 1, cxx20: 34, lwg: 2, vso: 220, libcxx: 530 },
    { date: '2018-09-28', cxx17: 1, cxx20: 34, lwg: 2, vso: 220, libcxx: 530 },
    { date: '2018-10-05', cxx17: 1, cxx20: 34, lwg: 2, vso: 220, libcxx: 530 },
    { date: '2018-10-12', cxx17: 1, cxx20: 34, lwg: 2, vso: 221, libcxx: 530 },
    { date: '2018-10-19', cxx17: 1, cxx20: 34, lwg: 2, vso: 223, libcxx: 530 },
    { date: '2018-10-26', cxx17: 1, cxx20: 34, lwg: 2, vso: 225, libcxx: 533 },
    { date: '2018-11-02', cxx17: 1, cxx20: 34, lwg: 2, vso: 227, libcxx: 533 },
    { date: '2018-11-09', cxx17: 1, cxx20: 34, lwg: 2, vso: 229, libcxx: 533 },
    { date: '2018-11-16', cxx17: 1, cxx20: 51, lwg: 10, vso: 230, libcxx: 535 },
    { date: '2018-11-23', cxx17: 1, cxx20: 51, lwg: 10, vso: 232, libcxx: 535 },
    { date: '2018-11-30', cxx17: 1, cxx20: 51, lwg: 9, vso: 233, libcxx: 538 },
    { date: '2018-12-07', cxx17: 1, cxx20: 51, lwg: 9, vso: 235, libcxx: 538 },
    { date: '2018-12-14', cxx17: 1, cxx20: 51, lwg: 9, vso: 238, libcxx: 538 },
    { date: '2018-12-21', cxx17: 1, cxx20: 51, lwg: 9, vso: 238, libcxx: 538 },
    { date: '2018-12-28', cxx17: 1, cxx20: 51, lwg: 9, vso: 238, libcxx: 538 },
    { date: '2019-01-04', cxx17: 1, cxx20: 51, lwg: 9, vso: 238, libcxx: 538 },
    { date: '2019-01-11', cxx17: 1, cxx20: 51, lwg: 9, vso: 235, libcxx: 538 },
    { date: '2019-01-18', cxx17: 1, cxx20: 50, lwg: 9, vso: 233, libcxx: 538 },
    { date: '2019-01-25', cxx17: 1, cxx20: 49, lwg: 9, vso: 233, libcxx: 541 },
    { date: '2019-02-01', cxx17: 1, cxx20: 48, lwg: 9, vso: 233, libcxx: 540 },
    { date: '2019-02-08', cxx17: 1, cxx20: 48, lwg: 9, vso: 233, libcxx: 540 },
    { date: '2019-02-15', cxx17: 1, cxx20: 48, lwg: 9, vso: 232, libcxx: 540 },
    { date: '2019-02-22', cxx17: 1, cxx20: 48, lwg: 9, vso: 234, libcxx: 540 },
    { date: '2019-03-01', cxx17: 1, cxx20: 57, lwg: 10, vso: 236, libcxx: 540 },
    { date: '2019-03-08', cxx17: 1, cxx20: 55, lwg: 10, vso: 237, libcxx: 540 },
    { date: '2019-03-15', cxx17: 1, cxx20: 54, lwg: 8, vso: 235, libcxx: 540 },
    { date: '2019-03-22', cxx17: 1, cxx20: 53, lwg: 8, vso: 236, libcxx: 577 },
    { date: '2019-03-29', cxx17: 1, cxx20: 52, lwg: 8, vso: 237, libcxx: 577 },
    { date: '2019-04-05', cxx17: 1, cxx20: 50, lwg: 8, vso: 238, libcxx: 578 },
    { date: '2019-04-12', cxx17: 1, cxx20: 50, lwg: 8, vso: 238, libcxx: 578 },
    { date: '2019-04-19', cxx17: 1, cxx20: 50, lwg: 8, vso: 240, libcxx: 578 },
    { date: '2019-04-26', cxx17: 1, cxx20: 50, lwg: 8, vso: 243, libcxx: 578 },
    { date: '2019-05-03', cxx17: 1, cxx20: 48, lwg: 8, vso: 230, libcxx: 573 },
    { date: '2019-05-10', cxx17: 1, cxx20: 47, lwg: 8, vso: 229, libcxx: 541 },
    { date: '2019-05-17', cxx17: 1, cxx20: 46, lwg: 8, vso: 232, libcxx: 541 },
    { date: '2019-05-24', cxx17: 1, cxx20: 44, lwg: 8, vso: 224, libcxx: 531 },
    { date: '2019-05-31', cxx17: 1, cxx20: 44, lwg: 7, vso: 226, libcxx: 531 },
    { date: '2019-06-07', cxx17: 1, cxx20: 43, lwg: 1, vso: 223, libcxx: 531 },
    { date: '2019-06-14', cxx17: 1, cxx20: 43, lwg: 1, vso: 197, libcxx: 531 },
    { date: '2019-06-21', cxx17: 1, cxx20: 43, lwg: 1, vso: 195, libcxx: 531 },
    { date: '2019-06-28', cxx17: 1, cxx20: 42, lwg: 1, vso: 196, libcxx: 531 },
    { date: '2019-07-05', cxx17: 1, cxx20: 42, lwg: 1, vso: 197, libcxx: 531 },
    { date: '2019-07-12', cxx17: 1, cxx20: 42, lwg: 1, vso: 198, libcxx: 531 },
    { date: '2019-07-19', cxx17: 1, cxx20: 42, lwg: 1, vso: 199, libcxx: 531 },
    { date: '2019-07-26', cxx17: 1, cxx20: 59, lwg: 5, vso: 195, libcxx: 531 },
    { date: '2019-08-02', cxx17: 1, cxx20: 59, lwg: 5, vso: 196, libcxx: 531 },
    { date: '2019-08-09', cxx17: 1, cxx20: 60, lwg: 6, vso: 198, libcxx: 474 },
    { date: '2019-08-16', cxx17: 0, cxx20: 60, lwg: 5, vso: 198, libcxx: 474 },
    { date: '2019-08-23', cxx20: 60, lwg: 5, vso: 199, libcxx: 474 },
    { date: '2019-08-30', cxx20: 60, lwg: 5, vso: 201, libcxx: 474 },
    { date: '2019-09-06', vso: 202, libcxx: 474 },
    { date: '2019-09-13', vso: 201, libcxx: 474 },
    { date: '2019-09-20', vso: 201, libcxx: 474 },
    { date: '2019-09-27', vso: 200, libcxx: 474 },
    { date: '2019-10-04', vso: 201, libcxx: 474 },
    { date: '2019-10-11', vso: 203, libcxx: 485 },
    { date: '2019-10-18', vso: 201, libcxx: 485 },
    { date: '2019-10-25', vso: 202, libcxx: 490 },
    { date: '2019-11-01', vso: 201, libcxx: 494 },
    { date: '2019-11-08', vso: 201, libcxx: 494 },
    { date: '2019-11-15', vso: 193, libcxx: 494 },
    { date: '2019-11-22', vso: 188, libcxx: 494 },
    { date: '2019-11-29', vso: 188, libcxx: 494 },
    { date: '2019-12-06', vso: 186, libcxx: 496 },
    { date: '2019-12-13', vso: 184, libcxx: 502 },
    { date: '2019-12-20', vso: 187, libcxx: 494 },
    { date: '2019-12-27', vso: 187, libcxx: 494 },
    { date: '2020-01-03', vso: 187, libcxx: 494 },
    { date: '2020-01-10', vso: 183, libcxx: 495 },
    { date: '2020-01-17', vso: 182, libcxx: 501 },
    { date: '2020-01-24', vso: 180, libcxx: 498 },
    { date: '2020-01-31', vso: 181, libcxx: 503 },
    { date: '2020-02-07', vso: 182, libcxx: 504 },
    { date: '2020-02-14', vso: 183, libcxx: 504 },
    { date: '2020-02-21', vso: 182, libcxx: 503 },
    { date: '2020-02-28', vso: 182, libcxx: 503 },
    { date: '2020-03-06', vso: 181, libcxx: 528 },
    { date: '2020-03-13', vso: 182, libcxx: 538 },
    { date: '2020-03-20', vso: 184, libcxx: 542 },
    { date: '2020-03-27', vso: 185, libcxx: 544 },
    { date: '2020-04-03', vso: 184, libcxx: 546 },
    { date: '2020-04-10', vso: 182, libcxx: 545 },
    { date: '2020-04-17', vso: 181, libcxx: 538 },
    { date: '2020-04-24', vso: 178, libcxx: 538 },
    { date: '2020-05-01', vso: 176, libcxx: 578 },
    { date: '2020-05-08', vso: 178, libcxx: 558 },
    { date: '2020-05-15', vso: 178, libcxx: 558 },
    { date: '2020-05-22', vso: 175, libcxx: 545 },
    { date: '2020-05-29', vso: 175, libcxx: 545 },
    { date: '2020-06-05', vso: 176, libcxx: 545 },
    { date: '2020-06-12', vso: 176, libcxx: 545 },
    { date: '2020-06-19', vso: 178, libcxx: 545 },
    { date: '2020-06-26', vso: 176, libcxx: 547 },
    { date: '2020-07-03', vso: 169, libcxx: 548 },
    { date: '2020-07-10', vso: 169, libcxx: 546 },
    { date: '2020-07-17', vso: 166, libcxx: 546 },
    { date: '2020-07-24', vso: 166, libcxx: 546 },
    { date: '2020-07-31', vso: 160, libcxx: 545 },
    { date: '2020-08-07', vso: 161, libcxx: 546 },
    { date: '2020-08-14', vso: 159, libcxx: 534 },
    { date: '2020-08-21', vso: 153, libcxx: 534 },
    { date: '2020-08-28', vso: 142, libcxx: 533 },
    { date: '2020-09-04', vso: 145, libcxx: 539 },
    { date: '2020-09-11', vso: 145, libcxx: 539 },
    { date: '2020-09-18', vso: 146, libcxx: 538 },
    { date: '2020-09-25', vso: 148, libcxx: 535 },
    { date: '2020-10-02', vso: 148, libcxx: 535 },
    { date: '2020-10-09', vso: 147, libcxx: 537 },
    { date: '2020-10-16', vso: 148, libcxx: 537 },
    { date: '2020-10-23', vso: 147, libcxx: 537 },
    { date: '2020-10-30', vso: 142, libcxx: 564 },
    { date: '2020-11-06', vso: 151, libcxx: 564 },
    { date: '2020-11-13', vso: 149, libcxx: 564 },
    { date: '2020-11-20', vso: 150, libcxx: 564 },
    { date: '2020-11-27', vso: 150, libcxx: 564 },
    { date: '2020-12-04', vso: 152, libcxx: 563 },
    { date: '2020-12-11', vso: 150, libcxx: 563 },
    { date: '2020-12-18', vso: 152, libcxx: 563 },
    { date: '2020-12-25', vso: 152, libcxx: 563 },
    { date: '2021-01-01', vso: 152, libcxx: 563 },
    { date: '2021-01-08', vso: 151, libcxx: 563 },
    { date: '2021-01-15', vso: 151, libcxx: 563 },
    { date: '2021-01-22', vso: 152, libcxx: 563 },
    { date: '2021-01-29', vso: 152, libcxx: 563 },
    { date: '2021-02-05', vso: 155, libcxx: 588 },
    { date: '2021-02-12', vso: 158, libcxx: 570 },
    { date: '2021-02-19', vso: 159, libcxx: 579 },
    { date: '2021-02-26', vso: 157, libcxx: 591 },
    { date: '2021-03-05', vso: 159, libcxx: 579 },
    { date: '2021-03-12', vso: 161, libcxx: 579 },
    { date: '2021-03-19', vso: 161, libcxx: 579 },
    { date: '2021-03-26', vso: 159, libcxx: 579 },
    { date: '2021-04-02', vso: 161, libcxx: 579 },
    { date: '2021-04-09', vso: 163, libcxx: 579 },
    { date: '2021-04-16', vso: 164, libcxx: 579 },
    { date: '2021-04-23', vso: 173, libcxx: 594 },
    { date: '2021-04-30', vso: 173, libcxx: 594 },
    { date: '2021-05-07', vso: 176, libcxx: 594 },
    { date: '2021-05-14', vso: 176, libcxx: 594 },
    { date: '2021-05-21', vso: 177, libcxx: 601 },
    { date: '2021-05-28', vso: 178, libcxx: 601 },
    { date: '2021-06-04', vso: 183, libcxx: 601 },
    { date: '2021-06-11', vso: 178, libcxx: 601 },
    { date: '2021-06-18', vso: 175, libcxx: 601 },
    { date: '2021-06-25', vso: 174, libcxx: 601 },
    { date: '2021-07-02', vso: 170, libcxx: 602 },
    { date: '2021-07-09', vso: 172, libcxx: 602 },
    { date: '2021-07-16', vso: 171, libcxx: 602 },
    { date: '2021-07-23', vso: 172, libcxx: 603 },
    { date: '2021-07-30', vso: 173, libcxx: 603 },
    { date: '2021-08-06', vso: 169, libcxx: 603 },
];