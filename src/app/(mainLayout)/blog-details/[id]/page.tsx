import BlogDetailsPage from '@/components/ui-pages/BlogDetails';
import { Metadata } from 'next';

interface IProps {
  params: { id: string };
}

export const metadata: Metadata = {
  title: '24/7 Spa | Blog Details',
};

const BlogDetails = ({ params }: IProps) => {
  return <BlogDetailsPage id={params.id} />;
};

export default BlogDetails;
