"use client"
import { useState, useCallback } from "react";
import { useUserStore } from "@/lib/store";
import { LoadingButton } from "../animatex/loadingbutton";
import { UserData } from "@/lib/types";
import { redirect } from "next/navigation";

type FormState = {
	username: string;
	email: string;
	className: string;
    password: string;
};

const CLASS_OPTIONS = ["Class 1", "Class 2", "Class 3"];

export default function RegistrationForm() {
	const [form, setForm] = useState<UserData>({
		username: "",
		email: "",
        password: "",
        id: "",
		className: CLASS_OPTIONS[0],
	});
	const [errors, setErrors] = useState("");
	const [success, setSuccess] = useState<string>("");
    const { addUser, users } = useUserStore();
    const [isloading, setIsLoading] = useState(false);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
			const { name, value } = e.target;
			setForm((s) => ({ ...s, [name]: value }));
		},
		[]
	);

    const handlesubmit = () => {
        setIsLoading(true);
        try{
            addUser({ ...form, id: (users.length + 1).toString() });
            setSuccess("Registration successful");
			setForm({ username: "", email: "", className: CLASS_OPTIONS[0], password: "" });
            redirect('/courses');
        }catch(err){
            setErrors("Registration failed. Please try again." );
        }
    }
	

	return (
		<form onSubmit={handlesubmit} className="bg-white p-4 rounded-2xl shadow-xs w-full max-w-[480px]">
			{errors && <div style={{ color: "#c00", marginTop: 6 }}>{errors}</div>}
            <div style={{ marginBottom: 12 }}>
				<label style={{ display: "block", fontWeight: 600 }}>Username</label>
				<input
					name="username"
                    className="input-field"
					value={form.username}
					onChange={handleChange}
					placeholder="Enter username"
					style={{ width: "100%", padding: 8, borderRadius: 4 }}
				/>
				
			</div>

			<div style={{ marginBottom: 12 }}>
				<label style={{ display: "block", fontWeight: 600 }}>Email</label>
				<input
					name="email"
                    className="input-field"
					value={form.email}
					onChange={handleChange}
					placeholder="you@example.com"
					type="email"
					style={{ width: "100%", padding: 8, borderRadius: 4 }}
				/>
				
			</div>

			<div style={{ marginBottom: 12 }}>
				<label style={{ display: "block", fontWeight: 600 }}>Class</label>
				<select
					name="className"
                    className="input-field"
					value={form.className}
					onChange={handleChange}
					style={{ width: "100%", padding: 8, borderRadius: 4 }}
				>
					{CLASS_OPTIONS.map((c) => (
						<option key={c} value={c}>
							{c}
						</option>
					))}
				</select>
				
			</div>

			<LoadingButton text="Register" loading={false} className="button-primary"/>
             

			{success && <div style={{ color: "green", marginTop: 12 }}>{success}</div>}
		</form>
	);
}
