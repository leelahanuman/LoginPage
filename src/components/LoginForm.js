import React from "react";
import image from "../images/and.jpeg"
const LoginForm = () => {
  return (
    <>
      {/* <form onSubmit={handleSumbit}> */}
      <div className="login-page">
        <div className="form">
        <div className=""><img src={image} className="img"></img></div>
          <div className="login">
            <input type="text" name="username" autocomplete="username" />
            <br />
            <input
              type="password"
              name="password"
              autocomplete="current-password"
            />
            <br />
            <span className="user-span"><i class='fas fa-user'></i>Your password that will insantly log you In</span>
            <button>Login</button>
            <p>OR</p>
      </div>
      <button className="get"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAAABAQH+/v7d3d0xMTFZWVmhoaEdHR2ysrLQ0NCBgYHFxcUnJyednZ1eXl7w8PCNjY04ODhAQEC4uLjq6upkZGRtbW3k5OR9fX06OjpISEjV1dVzc3MSEhKtra2KioqTk5MVFRVNTU3ZO9F1AAAEuklEQVR4nO2diW6jMBRFMW4C2SkhabZmmfn/fxwgizpAmodt8LNzT6WORgrWO70YYxMgCAAAAAAAAAAAAAAAAACAN0FKabuEB13UIh9NW+deiXG/8WW9TwccWA4nmTTqKAO52gpmrMcGQ5Src9FmyImboxnLJNuVeqJslwHhtRwRR4kBRRkkl1jc/2xsuBX0vTGgmEyOgpnenbyohbailBPBVrAoa73SU5RBJNh0vxplYVutw40MNowFr6WFkV6E+3xn52tY7qj7g45gJlhnWB5sxFxnL11wPco8yMtbfqhHOB0IzvtoSV7fSP0M9WK7fAJ5iF+JqmHyxT/CosLZSs1PBoe/DggWJSoeTfNumFYMQybzi6rkSG3Qz8eKWc2QBWH1v3PV05pRXHMaLIa22deFP1UPpjXDMJ+ufNgmM2tYZaLWkkkOXRqGuaH1lbZx1xlaXzTt1DD03hAZ9oJhw+p46J+h/xmiH1oAGbYBGdqh09ECGfZC//2w9eSg1XYkwzNpQ2XDvmkwnKu2RdtLs3nUhsfVsANhu/kpoRgOT7UtaevgpAzlsPZn+I3j9N7ChfLxuF5pzbBxgeykZtiY4aLNEqOYPQznhO3EgGDYsMYp4hHVkDBaqBu+3rAHQ1KGdCqGrz9OMWxC1fBJhh4ZIkP3DZGh+4Y+ZkgbD7kZYjx8boh+6L4hMrRjGNb+UT/S8Myw6VCuOlo8mx/yMxSeZbieZlU2aoZc++EnSYdiyDXDjleEvTJEhi4aujC3YJwhYfHR934oxMzlDE/p8iXpoj5yu5OhKu5kSLiA2HgjLDJsadjhaMHEsIp/GVbb8t0QGVoz1LjfoopBQ5lQqJfe9G0TynYkQ6MZnga7Xfo7u8GQdE4TL9P/mtqly6maYd+zJ+J5acNodSR/F6PT2ZOxuQW+qUA35LmKYdIQGbpvqJ2h4G7YmGG7b+794WZIuDKTzdsQbXowNHx1TRUmGVbx3RAZum+IDF00JMwtWt1s8WO5weCVmY7nFqqYM2yeH1IKpfXDw7QVjxsoDGZYzvF3afnr+mNyji/X8awFuy6uHzJap+nkzLuHtbbXqxGPIwD3a8A854ds17yZGL7bNxWwl7pviAzdN0SGLhq+22jhY4bVtnw3RIbuG7LNUM3PoQx17rfAPTMBiwzr+HWV2/9715rwK0OThsjQRUMX5hZN2yHDZ4boh+4bIkP3DZGhi4Z4XpuWIeHjfRu+6XMTvX/2Ze90+vxS/59B6+NzhPEsaAvgmextQIZ2QIZteIsM8Z4ZC6AftgEZ2qH7DC3TfYbWMfz+Q//fYen1e0j9f5fsO7wP2Pd3Ovv/Xu7A/3er5x1xwD/EvL6R6mCRO5bXJGw7/Epe3pK2vt0cYnZtgy9FbXONU2UZ7IsRwrbGc4o9bK98JC0NN6wzLEoLIw3BQjFirFgWtpV6Ezopz4Lr0aYsa73SnrEmkyNbRSEWG21BGSSXWDSeDdrkVtC3vmCZYra77hJcJMPbHhpHiaFFFbk6lw1zIq/na6x5kPlhmDtumeT3YD02uiZWNDa+rPfpgAHpcjjJZND4GGVNx6D9RfsuuFdi1O8mZ7xNVTjVAgAAAAAAAAAAAAAAAAD0zj8Le8Oie719qgAAAABJRU5ErkJggg==" className="devIcon"/>
  Get your new device now!</button><br/>
      <div className="sidebyside d-flex justify-content-center">
        <button name="submit" type="submit">  <i class="fas fa-circle fa-info text-primary"></i>
          Support
        </button>
        <button className="forgot" name="submit" type="submit">
          Forgot password?
        </button>
      </div>
          </div>
        </div>

      {/* </form> */}
    </>
  );
};
export default LoginForm;
