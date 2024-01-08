'use client';
import React from 'react';
function Page() {
	const [open, setOpen] = React.useState(1);
	const handleClick = () => setOpen(open + 1);
	return (
		<>
			<p>{open}</p>
			<button onClick={handleClick}>Click me</button>
		</>
	);
}

export default Page;
