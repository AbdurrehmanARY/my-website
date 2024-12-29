import React from "react";
import axios from "axios";
import { TypographyH3 } from "@/components/ui/Typographyh1";
import { TypographyP } from "@/components/ui/TypographyP";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";
import { Description } from "@radix-ui/react-toast";
import { Toast } from "@/components/ui/toast";

function Register() {
  const { dispatch, user, isAuth, registerUser } = useAuthContext();
  const { toast } = useToast();

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  // file change
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Access the selected file
    if (file) {
      setAvatar(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, role } = state;
    if (!name || !email || !password || !role || !avatar) {
      return toast({ description: "Please fill all fields" });
    }
    const formData = { name, email, password, role, avatar };

    const response = await registerUser(formData);
   
    if (response.success) {
      dispatch({ type: "SET_LOGIN", payload: { isAuth:false, user: response.user } });
      toast({
        title: response.success,
        description: response.message,
      });
      navigate("/auth/login");
    } else {
      return toast({
        variant: "destructive",
        title: response.success,
        description: response.message,
      });
    }
  

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-72 ">
          <TypographyH3 text="Create new account" />
          <p className="text-sm font-semibold">
            Already had an account ?{" "}
            <Link className="font-bold hover:underline" to="/auth/login">
              Login here here
            </Link>
          </p>
          <div className="grid w-full max-w-sm items-center gap-4">
            <Label htmlFor="name">Name</Label>
            <Input
              onChange={handleChange}
              type="name"
              name="name"
              id="name"
              placeholder="Enter name"
            />
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
            <Label htmlFor="avatar">avatar</Label>
            <Input
              onChange={handleFileChange}
              id="avatar"
              name="avatar"
              type="file"
            />
            <Button>Register</Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
