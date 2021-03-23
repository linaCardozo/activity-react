import useSignupForm from "./customHooks";

import * as Joi from "joi";

function Signup() {
  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string(),
    repeat_password: Joi.ref("password"),
  }).with("password", "repeat_password");

  const { handleSubmit, handleInputChange, errors } = useSignupForm(schema);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Type your email"
          id="email"
          name="email"
          autoComplete="username"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="password"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="repeat_password">Repeat password</label>
        <input
          type="password"
          id="repeat_password"
          name="repeat_password"
          autoComplete="password"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <p>{errors.toString()}</p>
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
}

export default Signup;
