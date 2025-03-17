interface MainPage {
  title_blue: string;
  title_white: string;
  older_type: true;
  older_text: string;
  icons_main: [
    {
      id: number;
      img: string;
      name: string;
    }
  ];
  questions_main: [
    {
      id: number;
      question: string;
      answer: string;
    }
  ];
  personal: [
    {
      id: number;
      title: string;
    }
  ];
  div_title1: string;
  des_title1: string;
  div_title2: string;
  des_title2: string;
  div_title3: string;
  des_title3: string;
  div_title4: string;
  des_title4: string;
}

interface iUserRegisterDoc {
  id: number;
  username: string;
  email: string;
  special: string;
  status_edu: string;
  status_cat: string;
  phone_number: string;
}

interface iUserRegisterPati {
  id: number;
  username: string;
  email: string;
  phone_number: string;
}
