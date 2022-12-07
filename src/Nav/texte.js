import { TypeAnimation } from "react-type-animation";

const Texte = ({text}) => {
  return (
    <TypeAnimation
      sequence={[
        "英語を話せますか これはいくらですか ありがとうございます",
        1000, // Waits 1s
        String(text), // Deletes 'One' and types 'Two'
        
        () => {
          console.log("Done typing!"); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={false}
      style={{ fontSize: "1em" }}
    />
  );
};

export default Texte;
