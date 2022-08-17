import React from "react";
import "./CareersPage.css";
import TextBox from "../../components/TextBox/TextBox";
import { images } from "../../constants";


function CareersPage() {
  return (
    <section className="w-[90%] max-w-[600px] mx-auto mb-16 mt-24 flex flex-col gap-10 laptop:flex-col laptop:items-center laptop:justify-center laptop:my-48 laptop:mx-auto laptop:max-w-[1000px]">
      <img
        src={images.heroDesktop}
        alt="a young man having a virtual reality device on his eyes"
        className="laptop:hidden"
      />
      <img
        src={images.heroDesktop}
        alt="a young man having a virtual reality device on his eyes"
        className="hidden laptop:flex  max-w-[1000px]"
      />
      <TextBox additionalClasses="laptop:bg-white relative laptop:py-16 laptop:max-w-[1000px] ">
        <h2 className="headings ">your opportunity is right here</h2>
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
          molestie, ut facilisis urna ullamcorper. Donec aliquam nibh felis, sit
          amet maximus erat semper vitae. Pellentesque maximus rutrum erat, vel
          efficitur orci faucibus sit amet. In fringilla, odio non dignissim
          rutrum, dolor orci mollis magna, at faucibus elit tellus eget ex.
          Phasellus magna quam, dapibus eu suscipit id, tincidunt at metus. In
          condimentum scelerisque ex quis gravida. Nulla turpis nunc, lacinia
          eget consectetur a, mattis non elit. Cras consequat nisl neque, at
          convallis turpis eleifend in. Curabitur commodo metus ac eros
          ultricies venenatis. Quisque et risus elementum lectus faucibus
          posuere. Donec non ex at arcu vehicula faucibus. Cras at ante eu odio
          varius blandit quis nec nulla. Mauris erat nisi, convallis ut purus
          sed, sagittis lacinia elit. Nullam vel odio vel purus lobortis
          lobortis sit amet vel arcu. Curabitur facilisis justo nec tincidunt
          malesuada. Curabitur aliquet ultrices arcu vulputate pretium.
          Phasellus eu massa et dui imperdiet dictum. Quisque sed posuere lacus.
          Ut pharetra felis id orci volutpat vulputate. Mauris fringilla commodo
          leo, in malesuada lectus pretium vel. Vestibulum neque diam, aliquet
          quis suscipit vehicula, convallis id justo. Phasellus risus felis,
          imperdiet sit amet blandit ut, ornare sed massa. Ut metus diam,
          sodales vitae turpis vel, luctus rhoncus ante. Aenean pellentesque
          mollis auctor. Donec laoreet ligula elit, et pellentesque ipsum tempor
          quis. Curabitur sed nisi urna. Nunc quam urna, ullamcorper quis rutrum
          id, eleifend at velit. Donec faucibus nulla lobortis, ullamcorper
          lectus nec, dictum massa. Donec efficitur diam ac lectus consectetur
          tristique.
        </p>
      </TextBox>
    </section>
  );
}

export default CareersPage;
