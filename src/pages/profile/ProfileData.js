export const personalityArr = ["성실함", "적응을 잘하는", "꼼꼼함", "끈기있는"];

export const educationArr = [
  { date: "2008.03 - 2011.02", content: "한국게임과학고등학교 졸업" },
  {
    date: "2011.03 - 2017.02",
    content: "인덕대학교 컴퓨터소프트웨어과 졸업",
  },
];

export const workArr = [
  { date: "2016.09 - 2020.09", content: "비바엔에스 - 매니저" },
  { date: "2021.03 - 현재", content: "C&R Research - staff" },
];

export const experiencesArr = [
  {
    date: "2010.08.14",
    content: "제 8회 청소년 게임캠프 2010 전국 게임공모전 - 장려상",
  },
  { date: "2010.09.03", content: "제 8회 전국학생게임공모전 - 입선" },
  {
    date: "2017.10.20 - 2017.10.21",
    content: "Seoul 2017 Maker Faire 참가",
  },
  {
    date: "2018.09.29 - 2018.09.30",
    content: "Seoul 2018 Maker Faire 참가",
  },
];

export const hobbyArr = [
  {
    iconClassName: "icon-health",
    iconArr: ["path1", "path2", "path3"],
    iconName: "건강관리",
  },
  {
    iconClassName: "icon-soccer",
    iconArr: ["path1", "path2", "path3", "path4"],
    iconName: "축구",
  },
  {
    iconClassName: "icon-jewellery", //아이콘 보여주기 위한 이름
    iconArr: ["path1", "path2", "path3", "path4"], //아이콘 이미지들
    iconName: "금속공예", //아이콘 이름
  },
];

export const profileBlockArr = [
    {
      frontTitle: "E", //앞글자
      restTitle: "ducation", //나머지 글자
      arr: educationArr, //내용
      compStatus: 1, //컴포넌트 다른거를 위한 구분자(1:Education, Experiences, Work 2:Hobby)
    },
    {
      frontTitle: "E",
      restTitle: "xperiences",
      arr: experiencesArr,
      compStatus: 1,
    },
    {
      frontTitle: "W",
      restTitle: "ork",
      arr: workArr,
      compStatus: 1,
    },
    {
      frontTitle: "H",
      restTitle: "obby",
      arr: hobbyArr,
      compStatus: 2,
    },
  ];