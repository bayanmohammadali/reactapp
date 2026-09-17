import React from "react";

const Main = ({NamePage,designer}) => {
  return (
    <main>
        {NamePage}
        <br></br>
        Designed by {designer}
    </main>
  )
}

export default Main;