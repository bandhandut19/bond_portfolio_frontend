/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface FormValues {
  email: string;
  password: string;
}
const LoginPage = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();
  const handleLogin = async (data: FormValues) => {
    console.log(data);

    try {
      const res = await axios.post(
        // "http://localhost:5000/portfolio/user/login",
        "https://bond-porfolio-backend.vercel.app/portfolio/user/login",
        data,
        {
          withCredentials: true,
        }
      );

      if (res.data.data.userAccessToken) {
        localStorage.setItem("userAccessToken", res.data.data.userAccessToken);
        navigate("/adminpanel");
        toast.success("Logged In Successfully");
      }
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <div className="hero bg-[#AB886D] min-h-screen">
      <div className=" bg-[#D6C0B3] shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
              {...register("password")}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn  bg-[#AB886D] border-none outline-none ">
              <span className="text-black">Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
