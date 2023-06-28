import * as React from 'react';
import {
	Body,
	Button,
	Column,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Text,
} from '@react-email/components';

interface NotionMagicLinkEmailProps {
	loginCode?: string;
}

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: '';

const Font = ({
	webFont,
	fontStyle = 'normal',
	fontFamily,
	fontWeight = 400,
	fallbackFontFamily,
}) => {
	const src = webFont
		? `src: url(${webFont.url}) format(${webFont.format});`
		: '';

	return (
		<style>
			{`
				@font-face {
					font-style: ${fontStyle};
					font-family: ${fontFamily};
					font-weight: ${fontWeight};
					mso-font-alt: ${
						Array.isArray(fallbackFontFamily)
							? fallbackFontFamily[0]
							: fallbackFontFamily
					};
					${src}
				}

				* {
					font-family: ${fontFamily}, ${
				Array.isArray(fallbackFontFamily)
					? fallbackFontFamily.join(', ')
					: fallbackFontFamily
			};
				}
				`}
		</style>
	);
};

const FeatureBlock = ({
	title,
	desc,
	imageUrls,
}: {
	title: string;
	desc: string;
	imageUrls?: string[];
}) => (
	<Container style={featureBlockContainer}>
		<Heading as="h3" style={{ margin: '0 0 8px' }}>
			{title}
		</Heading>
		<Section>
			{imageUrls &&
				imageUrls.map((imageUrl) => (
					<Column>
						<Img
							src={imageUrl}
							width="100%"
							height="auto"
							style={{ margin: '0 0 8px' }}
							alt="Feature Image"
						/>
					</Column>
				))}
		</Section>
		<Text style={featureTextBlock}>{desc}</Text>
	</Container>
);
export const NotionMagicLinkEmail = ({
	loginCode = 'sparo-ndigo-amurt-secan',
}: NotionMagicLinkEmailProps) => (
	<Html>
		<Head>
			<Font
				fontFamily="Roboto"
				fallbackFontFamily="Verdana"
				webFont={{
					url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
					format: 'woff2',
				}}
				fontWeight={400}
				fontStyle="normal"
			/>
		</Head>
		<Preview>Ditto Tech Updates for MONTH</Preview>
		<Body style={main}>
			<Container style={container}>
				<Heading style={h1}>
					<Img
						src={`${baseUrl}/static/ditto-logo.png`}
						width="70"
						height="32"
						alt="Ditto Logo"
					/>
				</Heading>
				<Section
					style={{
						backgroundImage: `url(${baseUrl}/static/background.png)`,
						height: 180,
						position: 'relative',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						borderRadius: 16,
					}}
				>
					<Column
						style={{
							width: 100,
						}}
					>
						<Img
							src={`${baseUrl}/static/ditto-mascot.png`}
							width="90"
							height="auto"
							style={{
								top: 25,
							}}
							alt="Ditto Mascot"
						/>
					</Column>
					<Column
						style={{
							textAlign: 'center',
						}}
					>
						<Heading as="h2">Tech Updates</Heading>
						<Text style={headingSubText}>Hi all!</Text>
						<Text style={headingSubText}>
							The updates from the month of {`MONTH`}{' '}
						</Text>
					</Column>
					<Column
						style={{
							width: 100,
						}}
					></Column>
				</Section>
				<Section style={gapSection} />

				<FeatureBlock
					title="Feature 1"
					desc="As our teams grow in size, it has become significantly important to streamline workflows and stay on top of important tasks and updates. Notifications can be accessed directly from the bell icon on top right corner of the screen. Users have the option to set their working hours and selectively turn on/off notifications. "
					imageUrls={[
						`${baseUrl}/static/feat1-image1.png`,
						`${baseUrl}/static/feat1-image2.png`,
					]}
				/>
				<Section style={gapSection} />
				<FeatureBlock
					title="Feature 2"
					desc="Few of our leads visit our website and purchase policies directly from there. Such sales are now attributed to a dedicated section - unadvised sales. Admins and ops users will be able to add such sales."
					imageUrls={[
						`${baseUrl}/static/feat2-image1.png`,
						`${baseUrl}/static/feat2-image2.png`,
					]}
				/>
				<Section style={gapSection} />
				<FeatureBlock
					title="Automated Chat Distribution"
					desc="Chats are now automatically distributed to advisors in a prioritized manner instead of advisors having to spend time to choose chats from the unassigned section. 
					Clicking on the ‘Get Chat’ button provides the advisor with a chat and they can accept or reject a chat depending on the query and their expertise."
					imageUrls={[`${baseUrl}/static/feat3-image1.png`]}
				/>
			</Container>
		</Body>
	</Html>
);

export default NotionMagicLinkEmail;

const main = {
	backgroundColor: '#ffffff',
};

const container = {
	paddingLeft: '12px',
	paddingRight: '12px',
	margin: '0 auto',
};

const h1 = {
	color: '#333',
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: '24px',
	fontWeight: 'bold',
	margin: '40px 0',
	padding: '0',
};
const gapSection = {
	padding: '0 0 32px',
};

const featureBlockContainer = {
	backgroundColor: '#fafafa',
	padding: '40px',
	borderRadius: '16px',
};
const headingSubText = {
	color: '#333',
	lineHeight: '1.5',
	margin: '0',
	fontSize: '16px',
	fontWeight: 600,
};

const featureTextBlock = {
	color: '#333',
	lineHeight: '1.5',
	margin: '16px 0 0',
	fontSize: '16px',
	fontWeight: 400,
};
