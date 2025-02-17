'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fd9475a698f5daf7a461c828af79a08b",
"version.json": "902f25f6a166694df45a3ae7357761f0",
"index.html": "caf144cfa75cd9edf1b4c4a5a1b9f4d6",
"/": "caf144cfa75cd9edf1b4c4a5a1b9f4d6",
"main.dart.js": "baa4b3a257491c8e5576e4c42ca7e85f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "37723565a405b48ea29000ce0fcdc8bc",
"icons/Icon-192.png": "a86c09b6b2111a20359fc8b9e567e0c5",
"icons/Icon-maskable-192.png": "a86c09b6b2111a20359fc8b9e567e0c5",
"icons/Icon-maskable-512.png": "288ef72d087897aaa403dbbcc4e226d2",
"icons/Icon-512.png": "288ef72d087897aaa403dbbcc4e226d2",
"manifest.json": "a3a7d58172d619da3a5d2b458ea2155b",
".git/config": "ff9ed1ce9fa10b77c3e5f3952a3e977a",
".git/objects/61/00c4865af2aaa5684af531c0219dd7bea7d6ab": "aa24db27db3d860e3b15dc052402a270",
".git/objects/3e/6ed0af3e55381ec9ae8cbe5f0b42ed1b194f25": "1778b09c559cbfdcf5d8d64c78e0c11b",
".git/objects/04/2949357393c6822c52bc48b32e5238c200a625": "e6b25aa837180abcd1a34ca1825fede2",
".git/objects/32/622d81bb6d2d1732f24ff2803b12d33ca309c4": "dcd2f4bb089fcafd8a4ad841be2c741f",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/51/40ab3fd2d35d1b216c48848042d4b509da6133": "48a5bb23a0a505faa5a082fbddf24e73",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/93/657a7f0d13bbd84a5fff327d45f31507c803f0": "9e42ebcea8316e31ecbb2cf6482b6ff8",
".git/objects/94/21346a8670a3037b3d94cbdfaaa33f107ad5ff": "94c67a1ec4bc31fad5836527edddf1cd",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/c3d846e048b66ae54bfe079dd903834dc48496": "ec6fdb5075a72ce840847b2dab242184",
".git/objects/0e/f9f64efaeed72ea0225e2bc795051a61b70f3a": "6f566a0bf2533153286606913cc26095",
".git/objects/5f/ceb929613f2169b814258bcb8a42714889dd8d": "ed700997be4a5a4a5ae7d6952d1594f1",
".git/objects/ad/75caa9a3b9a0d6d665a15f98f1d41a65242ca0": "55415a0a2556a77fe14577f9a231dba2",
".git/objects/be/2c6917736667bd2a8d63ddf6ab5d4cf945634b": "30b83541b3d029203810bba6ca9e1815",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/b4/cb5baff584ee01bbb418898f245e7192fb200c": "fa289630e0edeec89ff42134c60eef67",
".git/objects/a2/6965512eb77a22a6cedc35e6a1e92996122bdf": "b86a7428274e4bcee8610aede2d794a6",
".git/objects/a5/1c0fcd56fa01abde3db5ba8fcdb2cf6c9d60f4": "f364ffa410bcb888f9620c8129b8defd",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/b6b022cd55675f37552f797bd20efaa78ecf2a": "132f65be532552278835500b06dd2bb4",
".git/objects/eb/ba9e4d155a6a4e16f7461a1e4673f861a7f99f": "3ce50b363fca6334d08f37f3fead68ce",
".git/objects/ee/a835b2afeca7dc8b0feba2d097dc31bd5bb6e3": "c2d41dbc873e4b4472abd522cfa5ff47",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fd/440f854f992c9f3895e14ee1518a54a08c6379": "72dbd6c29227a09fe666370c7a36dacf",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/1cc75e188910b3437aeeb72f87c25dbed14964": "2b19a51d3b7df94aba267857605a11bb",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/b53cf26762c13dce5476aedb49f68b63d1d1fb": "5305d6f2397713da1643d233619ae081",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/a16d0c49ba66692f7780e2077245e16a81a988": "ab3aaf1627f588f48b10237d6e4a802b",
".git/objects/16/72a2037f37c888629d0b95ca48b3a299494115": "6a6518ee734008d4f4d63326d6ced3b1",
".git/objects/42/d856404551ab756d7fa1bef4bc63a452d57905": "f3567739c3dd0f4a196e85b9f8d2da0c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/94f197f02daf8f173f529f2675db76ef71325c": "6e917c9b69990134b6ef8f55d8c31ec7",
".git/objects/87/7ddc77df58aa9485cddd8823df0b3f8d87ef99": "e051f3b69cbd057e77e66b21c1a90209",
".git/objects/80/d4199f96d7ca04f7c4999978a3354db5a54437": "ec3dfb8a094d712001ee16bc108669f8",
".git/objects/17/7a85ba47aef8e3875e7a4e5354e742c9d19157": "e7170fc39d43b4fc2cd0a8459e321acf",
".git/objects/8a/9988ec6704f69eb5089d909a9967e7e18ee9c8": "73a9a3a9b5704b8ad6d110f8c9db7c7b",
".git/objects/9f/9c659dd7be718803ec642a521a2b5b20380a3e": "02b16d6a9302f4b9838d82787824d954",
".git/objects/07/6537cf02ee7d1165a841cd6781bdaab8b414ec": "1998babb979ac1b174de4ac5d86bdb6c",
".git/objects/38/9e412a50ae850e5ee32035a9769377fc045455": "25029462dfbbef0c3aff21609f6ff06d",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/91/257048ee9c2292c81f725d2ce4c07988441a38": "f3a3ad56af4a6cda136366f5037f6a4f",
".git/objects/91/31fe2276e3dac2322f574a73b905431d8ea732": "c9e49d5ce837c2ab3c14bc96e109c8c2",
".git/objects/30/c02757838f65e29b5fa156b45bcc596d913b60": "6caa4510e51032e7352bcb69bd269b5c",
".git/objects/6c/75c30703f5eeb65679322eae241fb135bbdf60": "d8a9238307a8d0b4b02b6288a2b3288f",
".git/objects/55/042f3ac2b9ef9623c9c0c1a3224f1d8e0faf1f": "ee7547e4c764231bcbe4123083244a85",
".git/objects/90/cdd91d9cf04db23ea2d2dcbffac21fee9c7994": "8994080494e7972dc28b5afa8243269a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/fdc2d94bd476509bcfef5bdb128d721d53e98b": "57a06b1c5eac12200ba2717bdf8c9695",
".git/objects/b6/2b67ae4732be17bd28cbb6cf6d9e03d6b4fbfc": "a6e2c5ef1cd3f6c2fafbd7c683e4b6b0",
".git/objects/b6/55a6e3c119501d18b4d1f1f6ed7a563d908e66": "ad0143464afa4191d93ba0cc1ee2869d",
".git/objects/d2/195972b77d05ee0bae12d19e152160dbc32efc": "28b67c3b765439b2ca0f8d8fa38aee82",
".git/objects/aa/da0eccc06990c4b9b0d9d8c9054d0aca18043d": "7425483c125751631d8ba92e46924110",
".git/objects/a6/bf92965f4341fd07f778d633ab328e68a6e66b": "ed686d2fed88be351469be5c1d6fbef0",
".git/objects/ef/803b04090516aba5f9a093bb86048db95f2486": "61fdd1cc84b31fefa0075305f221d879",
".git/objects/ea/88d399e025b728fef28fffceb0a47ad61fdda4": "b0f8d2df885886e673eab7c01de64c91",
".git/objects/f7/d2256660cb264605abfb563ecc82c4f7fdcf6f": "362d8550c09e8d735bbe6f09d8fe248e",
".git/objects/fa/3f832af4dd42c45dd2add0a397d4a9fdf6eae6": "0360d3074660613991c6b9421cd44d20",
".git/objects/f1/779915d54b60aa8fa300cfdf18c22000f74f4a": "24110765e4606c295a188f53e04e1d33",
".git/objects/e7/cf894cda6e3f852716485eae2e583ddf507f35": "baa76bc0204d5707f171d1a3f23b758e",
".git/objects/cb/cc9a0cfebf40541a56e4b85013969d1516b678": "6646855ecaf6ea5996020840ac48edf1",
".git/objects/ce/a080aba5b27f65b12679967a9941e79aa7836c": "dd0cc5565e808fa31e03073bb21d89b6",
".git/objects/1b/d8964bcba01cbcfecf3a268b41753f4ca5d31d": "1b7e38422de613460162357dfddbdc40",
".git/objects/48/f02552f25852f08f36ac10e9e4a0b6a1766aa8": "ed91c270f9350520777c5d2ef7183f2d",
".git/objects/4a/0a1dcc85bc5f0a9434e61053fcfe02ecd5678c": "8199243f98639fcec8063a6abeb24dbe",
".git/objects/23/c0b2c4397ae94406506d52a2af87f42b99ba46": "707a037cbf8f361fe2907686b66ae9eb",
".git/objects/4f/296179b17719252f07566abd90afb5d7cc264d": "aaec6f608b3acda47e0486c58791e5e5",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/9ea198b6333c9b9ee779ffd9a05dfb8cf228c1": "28e4053503452217cdd9eaf934ff82d2",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/4cfe701659721d935170b3bd06b30cd86c8e33": "bee08d7288511559522567d9c32406eb",
".git/objects/1c/adbd626018f4ae26095c1ebcf0657bd8df290c": "f1caebbd8d0793db3712608efdb74b7e",
".git/objects/1c/133235449b74dc5ecf730d0610f5e1fea22226": "df0a68ab5d2267bc17438249b7863d92",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2e/6aeb89cb1ca0347dde3a5e55ba74b2a34d3361": "08bc4eaedf34b96ca4346cdfd5bde45e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9af8c7bee53cef57c45711ba456dfb53",
".git/logs/refs/heads/main": "5920e961d037b67328d24d7ab8515f64",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "097ad90fba95bc319d967e3a2c3b7f66",
".git/index": "9be7b05ca3180693cb5c5da60f624c5b",
".git/COMMIT_EDITMSG": "9f089b639127e2f5a79c4eda189678d6",
"assets/AssetManifest.json": "3767c8a88e779890fbcf60114e41739a",
"assets/NOTICES": "b9b32c4184c468aedd0256bb30e5b54e",
"assets/FontManifest.json": "7f8f15134190e8b81602c8beeaad8dc6",
"assets/AssetManifest.bin.json": "9cf4d8e636dd79fbea4fff2a3daef0ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4462eb5c9c564794d8e442f46b285226",
"assets/fonts/MaterialIcons-Regular.otf": "d4e412b6e9393410056b2dcd6381b580",
"assets/assets/svg/google-maps.svg": "faff79f706eeffe9e2452c03bd8e0579",
"assets/assets/svg/firebase.svg": "7f1bf2795e067daf4ac3b42a2a140496",
"assets/assets/svg/flutter-provider.svg": "4bb034106e2b5a605f9e955aa557451d",
"assets/assets/svg/google-play.svg": "c1c91b77e61927c3cb43d9c996189de0",
"assets/assets/svg/arrows-colored.svg": "9b38d1831374853ed64b50b9f9bf8402",
"assets/assets/svg/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/assets/svg/yandex-maps.svg": "24de718438cf4a7556c0a0bf0d5b0451",
"assets/assets/svg/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/svg/flutter-getx.svg": "d6b0e14c0ac8c80723d8c5f76510c164",
"assets/assets/svg/app-store.svg": "de300ed64c3a118159be4ca44e84c22f",
"assets/assets/svg/flutter-bloc.svg": "399f11d79d6c3ffa5cba4a7bc1634259",
"assets/assets/video/rolling-ball.mp4": "b2adf7b0f303d903170b2e22d6feb3ee",
"assets/assets/video/shootxshoot.mp4": "efa24b0f651c0646566de0b01a298a9a",
"assets/assets/video/ssal.mp4": "a57ca450abb8bb3e90061b027f288cd2",
"assets/assets/projects/participated_projects/easy_to_travel/ett-8.jpg": "b6f3756a074d6b9fb04efa310a560a3f",
"assets/assets/projects/participated_projects/easy_to_travel/ett-9.jpg": "155da7ac335fc8d380e5804c051d7e4b",
"assets/assets/projects/participated_projects/easy_to_travel/ett-banner.jpg": "4d1442d50d5c8c96c5e3f5190642ad41",
"assets/assets/projects/participated_projects/easy_to_travel/ett-logo.svg": "a6cd3e65af06d9b6c4c07dabdd41145b",
"assets/assets/projects/participated_projects/easy_to_travel/ett-7.jpg": "0d13fb5006ed68e300ef63c1a9f0bc79",
"assets/assets/projects/participated_projects/easy_to_travel/ett-6.jpg": "16d64a4dd4058377e5c2d2e3a3415142",
"assets/assets/projects/participated_projects/easy_to_travel/ett-4.jpg": "a422feca8381fcf7d189eaec466504be",
"assets/assets/projects/participated_projects/easy_to_travel/ett-5.jpg": "7246a1d5538507214e31f3641d374799",
"assets/assets/projects/participated_projects/easy_to_travel/ett-1.jpg": "a011f5220726bbbc257215f3144f9890",
"assets/assets/projects/participated_projects/easy_to_travel/ett-2.jpg": "cbb9fe1b5fdad415fade5461cb7b044c",
"assets/assets/projects/participated_projects/easy_to_travel/ett-3.jpg": "b0cb410aa8eebec214708d67f6d770f6",
"assets/assets/projects/participated_projects/madadio/madad-logo.svg": "1827bd33ae6260e1e9a258324367176e",
"assets/assets/projects/participated_projects/madadio/madad-banner.png": "d6f3486d3cc046d3eab251fef07b8551",
"assets/assets/projects/participated_projects/madadio/madad-6.png": "c5f4b7a1e2849b3495a496fdef5fa9f2",
"assets/assets/projects/participated_projects/madadio/madad-5.png": "b7607b5af85da00e3a24c9f1971e5d7b",
"assets/assets/projects/participated_projects/madadio/madad-4.png": "c16bc507c6f015ec9ce052336a005db2",
"assets/assets/projects/participated_projects/madadio/madad-1.png": "4de26e12af3d3051bd82a9ee1f797f55",
"assets/assets/projects/participated_projects/madadio/madad-3.png": "73ad612ce8bda9eded4afd72e9b1e4c0",
"assets/assets/projects/participated_projects/madadio/madad-2.png": "82765f0d85e9186a1b4f8917c3f28cff",
"assets/assets/projects/participated_projects/parfume/parfume-logo.jpg": "e31091004a45198381bfe3b1aaeb91f7",
"assets/assets/projects/participated_projects/parfume/parfume-banner.jpg": "b801286a95bb40912dc7a972bedbde7d",
"assets/assets/projects/participated_projects/parfume/parfume-4.png": "fea9930ce1717bf73423b7e613462ffb",
"assets/assets/projects/participated_projects/parfume/parfume-5.png": "170cadbeb42d41eb03ca79de1b4778bc",
"assets/assets/projects/participated_projects/parfume/parfume-1.png": "305491f4a8728119e60b90558966dee1",
"assets/assets/projects/participated_projects/parfume/parfume-2.png": "1d7617fe539b0d8b1eb61e266398aa28",
"assets/assets/projects/participated_projects/parfume/parfume-3.png": "ded0a56bb7f28af84b6dca9998fc9625",
"assets/assets/projects/participated_projects/hyssa/hyssa-1.jpg": "43997622835b1c836a7ed7b5147599c2",
"assets/assets/projects/participated_projects/hyssa/hyssa-3.jpg": "de98df650bcc0d19dc703eae3f811dba",
"assets/assets/projects/participated_projects/hyssa/hyssa-2.jpg": "10c67fc4f768308410bd115ca3ca2068",
"assets/assets/projects/participated_projects/hyssa/hyssa-banner.svg": "03738099a664b2fb7806270b5efab676",
"assets/assets/projects/participated_projects/hyssa/hyssa-logo.svg": "33d32d0fededd8611e5aa9ec597da355",
"assets/assets/projects/participated_projects/hyssa/hyssa-4.jpg": "54c29e19f4b27334773c636719d2360d",
"assets/assets/projects/participated_projects/hyssa/hyssa-banner.jpg": "649733b0d8327021a491a0830df0ffde",
"assets/assets/projects/my_projects/mindly/mindly-banner.jpg": "3208ff304c25af61aec308cb8577ec47",
"assets/assets/projects/my_projects/mindly/mindly-logo.svg": "b432d7bef81bc961e26080670a875886",
"assets/assets/projects/my_projects/mindly/mindly-4.jpg": "e9ba132e3589bf556835f0764cdc0ccf",
"assets/assets/projects/my_projects/mindly/mindly-1.jpg": "34bced3c0b7ba41e134ef833c921c2b2",
"assets/assets/projects/my_projects/mindly/mindly-3.jpg": "ad55fa71a527dd4cc0c2cc6119e7b335",
"assets/assets/projects/my_projects/mindly/mindly-2.jpg": "f438f22ca976359f2a026e747bdce393",
"assets/assets/projects/my_projects/t_medical/t-medical-3.jpg": "a225448f9945e424a49337a9a899686d",
"assets/assets/projects/my_projects/t_medical/t-medical-2.jpg": "156bb7c5ee5e7645790957db3abff011",
"assets/assets/projects/my_projects/t_medical/t-medical-1.jpg": "7985c2aa4b6445601fd6be098dc571ae",
"assets/assets/projects/my_projects/t_medical/t-medical-banner.jpg": "632d40df355c00ba64a897efd6ec480b",
"assets/assets/projects/my_projects/t_medical/t-medical-logo.svg": "0b32c880aabfc2fcc179fb44e8c381d2",
"assets/assets/projects/my_projects/t_beauty/t-beauty-logo.svg": "4d085320899e025c3fddda77700b6018",
"assets/assets/projects/my_projects/t_beauty/t-beauty-banner.jpg": "8bcbd6b4883f2c1629b2cbcf4f8ac7d6",
"assets/assets/projects/my_projects/t_beauty/t-beauty-4.jpg": "91e1e5d7c8287ee178208ea600e9e2fb",
"assets/assets/projects/my_projects/t_beauty/t-beauty-1.jpg": "baba14476b5f0e6af4cc19abe1194cb5",
"assets/assets/projects/my_projects/t_beauty/t-beauty-2.jpg": "d9c0599b7cbb6f4ab06bd193fc0f073a",
"assets/assets/projects/my_projects/t_beauty/t-beauty-3.jpg": "ec4264c58b3db6d6046c0a87f859c3b7",
"assets/assets/projects/my_mini_games/six_sides_and_line/ssal-banner.mp4": "a57ca450abb8bb3e90061b027f288cd2",
"assets/assets/projects/my_mini_games/six_sides_and_line/ssal-logo.png": "e5f7fb99bf7ea9ea0db9dd065f16dcd1",
"assets/assets/projects/my_mini_games/six_sides_and_line/ssal-5.png": "54106d98ee6be7f760e6c29ff4880b75",
"assets/assets/projects/my_mini_games/six_sides_and_line/ssal-4.png": "6f894284cc3f3033e874298d254175c9",
"assets/assets/projects/my_mini_games/six_sides_and_line/ssal-1.png": "00485dfd93d5a94675867cc4fc23e438",
"assets/assets/projects/my_mini_games/six_sides_and_line/ssal-3.png": "36d3dc8f8d9d01cc608aca61b7b181d0",
"assets/assets/projects/my_mini_games/six_sides_and_line/ssal-2.png": "2f62bdeb98779acbbc41b7fb01353a9f",
"assets/assets/projects/my_mini_games/rolling_ball/roll-b-logo.png": "2b4d10bf4cc7ee68155ded5a1964b05f",
"assets/assets/projects/my_mini_games/rolling_ball/roll-b-4.png": "6ee4c1e8bad3b3f28b72b0815d512e26",
"assets/assets/projects/my_mini_games/rolling_ball/roll-b-1.png": "ea64ac36880d924430b3d6d8857a02ea",
"assets/assets/projects/my_mini_games/rolling_ball/roll-b-3.png": "824643a70f06471b1ab9bb37d2387075",
"assets/assets/projects/my_mini_games/rolling_ball/roll-b-2.png": "95feb806d7fc6279bd412df6aea36ffd",
"assets/assets/projects/my_mini_games/rolling_ball/roll-b-banner.mp4": "b2adf7b0f303d903170b2e22d6feb3ee",
"assets/assets/projects/my_mini_games/knights_middle_ages/kma-3.png": "b5719c53c57dc7104bcaa05cf164cf60",
"assets/assets/projects/my_mini_games/knights_middle_ages/kma-2.png": "b691263b77830a31ac9ed93efa8d562d",
"assets/assets/projects/my_mini_games/knights_middle_ages/kma-1.png": "daf5a8530fb5d14b53485f04175b6c63",
"assets/assets/projects/my_mini_games/knights_middle_ages/kma-logo.jpg": "ace8a9837fcbbdd1a70fb7e6d6cfdb82",
"assets/assets/projects/my_mini_games/knights_middle_ages/kma-banner.png": "eac41753e6f8dc87fc84145bc98cb7dc",
"assets/assets/projects/my_mini_games/shoot_x_shoot/sh-x-sh-banner.mp4": "efa24b0f651c0646566de0b01a298a9a",
"assets/assets/projects/my_mini_games/shoot_x_shoot/sh-x-sh-4.png": "4438a47966f0df4e3bfc9b3f6e6ee820",
"assets/assets/projects/my_mini_games/shoot_x_shoot/sh-x-sh-2.png": "80cfcb7d2bda5962e00f14c1f0282ab7",
"assets/assets/projects/my_mini_games/shoot_x_shoot/sh-x-sh-3.png": "7b105e0d41af2b588bb45bf4fb0d53d9",
"assets/assets/projects/my_mini_games/shoot_x_shoot/sh-x-sh-1.png": "db86e790cb138e50159558bd6a59b9f6",
"assets/assets/projects/my_mini_games/shoot_x_shoot/sh-x-sh-logo.jpg": "4c0f918159260b6ea030d887ad9f3fda",
"assets/assets/png/me.png": "8646f6763aa353bbbe65074fbbe2487b",
"assets/assets/png/app_images/madad.png": "d6f3486d3cc046d3eab251fef07b8551",
"assets/assets/png/app_images/kotma.png": "eac41753e6f8dc87fc84145bc98cb7dc",
"assets/assets/png/app_images/ssal.jpg": "5fc53a0d6c00f952db05d73dfa774b16",
"assets/assets/png/app_images/parfume.png": "1d7617fe539b0d8b1eb61e266398aa28",
"assets/assets/png/app_images/mebel-savdo.png": "0240286e0c804e80e5785338e54b02d5",
"assets/assets/png/app_images/ett.png": "405f7d7172b87da3fc81ee83946d1d14",
"assets/assets/png/app_images/rolling-ball.jpg": "f339aac4441b3d339207a3309c29b082",
"assets/assets/png/app_images/shootxshoot.jpg": "ec0e95f707351f992a41b020e4930d33",
"assets/assets/png/my_image.png": "d586e903ea0b1d1f1ab2e3c605f84bef",
"assets/assets/png/app_icons/kotma.jpg": "ace8a9837fcbbdd1a70fb7e6d6cfdb82",
"assets/assets/png/app_icons/madadio.jpg": "51415fe10171086490cd089a98848472",
"assets/assets/png/app_icons/six-sides.png": "e5f7fb99bf7ea9ea0db9dd065f16dcd1",
"assets/assets/png/app_icons/parfume.png": "5df53b37cb32034bc5b58c1162f394c7",
"assets/assets/png/app_icons/mebel-savdo.png": "d9c6802b2a598cee006156fecebf6b49",
"assets/assets/png/app_icons/ett.png": "028997e83285f71957940c0b92e93d01",
"assets/assets/png/app_icons/rolling-ball.png": "2b4d10bf4cc7ee68155ded5a1964b05f",
"assets/assets/png/app_icons/shootxshoot.jpg": "4c0f918159260b6ea030d887ad9f3fda",
"assets/assets/fonts/DMMono-Light.ttf": "7b404c88b96f013e886d78a66a53a77b",
"assets/assets/fonts/DMMono-Medium.ttf": "e0b4b36de3605fff15634209b7015425",
"assets/assets/fonts/DMMono-Regular.ttf": "c6d78233d13e36d83688ac5e6ee0927a",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
