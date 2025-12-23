import { useState, useCallback } from "react";

type FormState = {
	username: string;
	email: string;
	className: string;
};

const CLASS_OPTIONS = ["Class 1", "Class 2", "Class 3"];

export default function RegistrationForm() {
	const [form, setForm] = useState<FormState>({
		username: "",
		email: "",
		className: CLASS_OPTIONS[0],
	});
	const [errors, setErrors] = useState<Partial<FormState>>({});
	const [success, setSuccess] = useState<string>("");

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
			const { name, value } = e.target;
			setForm((s) => ({ ...s, [name]: value }));
		},
		[]
	);

	const validate = useCallback(() => {
		const nextErrors: Partial<FormState> = {};
		if (!form.username.trim()) nextErrors.username = "Username is required";
		if (!form.email.trim()) nextErrors.email = "Email is required";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Invalid email";
		if (!form.className) nextErrors.className = "Please select a class";
		setErrors(nextErrors);
		return Object.keys(nextErrors).length === 0;
	}, [form]);

	const handleSubmit = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			setSuccess("");
			if (!validate()) return;
			// Replace this with an API call as needed
			console.log("Registration submitted:", form);
			setSuccess("Registration successful");
			setForm({ username: "", email: "", className: CLASS_OPTIONS[0] });
		},
		[form, validate]
	);

	return (
		<form onSubmit={handleSubmit} style={{ maxWidth: 420 }}>
			<div style={{ marginBottom: 12 }}>
				<label style={{ display: "block", fontWeight: 600 }}>Username</label>
				<input
					name="username"
					value={form.username}
					onChange={handleChange}
					placeholder="Enter username"
					style={{ width: "100%", padding: 8, borderRadius: 4 }}
				/>
				{errors.username && <div style={{ color: "#c00", marginTop: 6 }}>{errors.username}</div>}
			</div>

			<div style={{ marginBottom: 12 }}>
				<label style={{ display: "block", fontWeight: 600 }}>Email</label>
				<input
					name="email"
					value={form.email}
					onChange={handleChange}
					placeholder="you@example.com"
					type="email"
					style={{ width: "100%", padding: 8, borderRadius: 4 }}
				/>
				{errors.email && <div style={{ color: "#c00", marginTop: 6 }}>{errors.email}</div>}
			</div>

			<div style={{ marginBottom: 12 }}>
				<label style={{ display: "block", fontWeight: 600 }}>Class</label>
				<select
					name="className"
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
				{errors.className && <div style={{ color: "#c00", marginTop: 6 }}>{errors.className}</div>}
			</div>

			<button type="submit" style={{ padding: "8px 12px", borderRadius: 6 }}>
				Register
			</button>

			{success && <div style={{ color: "green", marginTop: 12 }}>{success}</div>}
		</form>
	);
}
