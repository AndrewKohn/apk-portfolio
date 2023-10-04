import './Tags.scss';

interface Props {
  projectTags: any;
}

const Tags = ({ projectTags }: Props) => {
  const tags = projectTags.map((TagIcon: any, index: number) => {
    return <TagIcon key={index} className="tag" />;
  });

  return <div className="tags">{tags}</div>;
};

export default Tags;
