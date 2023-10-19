import BlogPage from '@/components/ui-pages/blog-page/BlogPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24/7 Spa | Blog',
};

const Blog = () => {
  return <BlogPage />;
};

export default Blog;
