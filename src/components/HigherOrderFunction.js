import { WrappedMessage } from "./WrappedMessage";

export const HigherOrderFunction = (WrappedComponent) => {
  const name ='John Doe';
  // below code is similar to defining a react functional component
  // you can use one of the approaches
  // return (props) => (
  //   <WrappedComponent name={name} />
  // )
  const myStyles = {
    backgroundColor: 'red',
    color: 'white',
    fontSize: '20px'
  };
  return (props)=>{
    return <>
    <div style={myStyles}>
    <WrappedComponent name={name} />
    </div>
    </>
  }
};
