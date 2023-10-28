import { Fragment , useState} from "react";
import "./Receips.css";
const Recipes = (props) => {
    const [show, setShow] = useState(false);
  const { label, image, ingredients, url } = props.Obj.recipe;
  return (
    <Fragment >
    {show ? <div
        onClose={() => console.log("close")}
        open={!!show}
        className="recipecontainer"
      >
        <span style={{fontSize:"small",fontWeight:"bold",textAlign:"center"}}>Ingredients</span>
        <div>
          <label style={{fontSize:"small",fontWeight:"700",textAlign:"center"}}>{label}</label>
          <div>
            <div style={{fontSize:"small",fontWeight:"bold",display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
              <span style={{fontSize:"small",fontWeight:"700",}}>Ingredient</span>
              <span style={{fontSize:"small",fontWeight:"700",}}>Weight</span>
            </div>
            <table >
              {ingredients.map((ingredient, index) => (
                <tr key={index} style={{fontSize:"small",fontWeight:"bold",display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                  <td style={{fontSize:"10px"}}>{ingredient.text}</td>
                  <td style={{fontSize:"small"}}>{ingredient.weight}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <div>
          <button onClick={() => window.open(url)} style={{border:"1px solid blue",color:"blue",marginRight:"10px"}}>See More</button>
          <button onClick={() => setShow(false)} style={{border:"1px solid red",color:"red"}}>Close</button>
        </div>
        <button style={{border:"1px solid orange",color:"blue",height:"1.5rem",width:"9rem",fontSize:"small",margin:"10px auto 1px auto"}}>Add to Favourits</button>
      </div> : 
    <div className="recipecontainer">
      <img className="img" src={image} alt="food" />
      <span className="name">{label}</span>
      <span className="details" onClick={() => setShow(!show)}>Details</span>
      <span className="complete" onClick={() => window.open(url)}>Complete Receipe</span>
    </div> }
    </Fragment>
  );
};

export default Recipes;
