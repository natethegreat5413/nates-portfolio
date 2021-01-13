import React from 'react';
import '../../App.css';
import '../pages/About.css';

export default function About() {
	return (
		<div className="about">
			<div className="content">
				<h1 className="title">About Me</h1>
				<div className="paragraphs">
					<p>
						My journey to coding started after realizing a traditional university route was not a good fit
						for me. I value education and sought to further my skill set through an alternative path: Trade
						School.
					</p>
					<br />
					<p>
						Through my program at Lambda, I learned to code and developed a passion for the tech industry.
						In a technology focused world, I saw the many opportunities this field presented for personal
						growth and satisfaction.
					</p>
					<br />
					<p>
						I am a native Utahn, and when I'm not coding, I'm out seeking the best adventures Utah has to
						offer.
					</p>
				</div>
			</div>
		</div>
	);
}
