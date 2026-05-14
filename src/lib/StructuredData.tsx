interface StructuredDataProps {
	data: object;
	id?: string;
}

const StructuredData = ({ data, id }: StructuredDataProps) => (
	<script
		type="application/ld+json"
		id={id}
		dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
	/>
);

export default StructuredData;
