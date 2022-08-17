import React from "react";
import "./EventsPage.css";

import TextBox from "../../components/TextBox/TextBox";
import { images } from "../../constants";

function EventsPage() {
  return (
    <section className="w-[90%] max-w-[600px] mx-auto mb-16 mt-24 flex flex-col gap-10 laptop:flex-col laptop:items-center laptop:justify-center laptop:my-48 laptop:mx-auto laptop:max-w-[1000px]">
      <img
        src={images.interactiveMobile}
        alt="a young man having a virtual reality device on his eyes"
        className="laptop:hidden"
      />
      <img
        src={images.interactiveDesktop}
        alt="a young man having a virtual reality device on his eyes"
        className="hidden laptop:flex "
      />
      <TextBox additionalClasses="laptop:bg-white relative laptop:py-16 laptop:max-w-[725px] ">
        <h2 className="headings "> our upcoming event</h2>
        <p>
          you can check here our upcoming events. don't forget to check this
          page regularly so you don't miss any
        </p>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          vestibulum ligula ut sapien sollicitudin tincidunt sit amet convallis
          metus. In malesuada mi et tortor ornare semper eu eget lectus. Morbi
          euismod suscipit fringilla. Donec pulvinar commodo gravida. Curabitur
          feugiat purus felis, vitae semper leo placerat a. Quisque finibus,
          magna a dapibus cursus, orci massa fringilla neque, sed sollicitudin
          nulla sem et leo. Aliquam id vehicula dolor, vitae imperdiet urna. In
          at felis finibus nisi suscipit porta finibus sit amet nunc. Praesent
          porta, mi eget faucibus ullamcorper, diam augue lacinia dui, a dapibus
          lacus velit id arcu. Praesent congue sit amet sem sit amet tempus.
          Cras ullamcorper velit urna, luctus pellentesque nibh faucibus sit
          amet. Donec blandit nulla ut laoreet faucibus. In tincidunt, arcu vel
          iaculis dignissim, augue erat hendrerit nulla, non tincidunt sem ex id
          ex. Aenean condimentum id dui quis facilisis. In gravida justo quis
          arcu aliquam, elementum tempus diam aliquet. Sed elementum varius mi
          sit amet lobortis. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Fusce aliquam tortor id odio congue vehicula. Integer eget
          augue neque. Ut lacinia nulla eget justo blandit ornare. Donec ornare
          pretium velit, ut egestas massa porta a. Sed eget sapien nec sapien
          tincidunt sodales nec nec massa. Integer a tellus quis sapien aliquam
          sollicitudin. Sed consectetur ultrices urna, tempus pellentesque massa
          egestas non. Cras in interdum sapien, in posuere orci. Aliquam
          accumsan maximus quam vel blandit. Vivamus dui nulla, sagittis nec
          suscipit et, blandit eu ligula. Aliquam sodales quam in metus
          molestie, ut facilisis urna ullamcorper.
        </p>
      </TextBox>
    </section>
  );
}

export default EventsPage;
