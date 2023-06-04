import './ProjectGridItemSkeleton.scss';
import Skeleton from '@mui/material/Skeleton';
import Card from '../UI/Card';

const ProjectGridItemSkeleton = ({}) => {
  return (
    <Card classes="skeletonCard">
      <Skeleton
        variant="rectangular"
        width="300px"
        height="200px"
        animation="wave"
        sx={{ backgroundColor: 'rgba(75, 75, 75, 0.1)' }}
      />
      <div className="middle-row">
        <Skeleton
          variant="text"
          width="225px"
          sx={{
            fontSize: '3.2rem',
            backgroundColor: 'rgba(75, 75, 75, 0.1)',
          }}
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          width="300px"
          height="140px"
          animation="wave"
          sx={{ backgroundColor: 'rgba(75, 75, 75, 0.1)' }}
        />
        <div className="bottom-row">
          <div className="links-wrapper">
            <Skeleton
              variant="rounded"
              width="50px"
              height="54px"
              animation="wave"
              sx={{ backgroundColor: 'rgba(75, 75, 75, 0.1)' }}
            />
            <Skeleton
              variant="rounded"
              width="50px"
              height="54px"
              animation="wave"
              sx={{ backgroundColor: 'rgba(75, 75, 75, 0.1)' }}
            />
            <Skeleton
              variant="rounded"
              width="50px"
              height="54px"
              animation="wave"
              sx={{ backgroundColor: 'rgba(75, 75, 75, 0.1)' }}
            />
          </div>
          <Skeleton
            variant="rounded"
            width="90px"
            height="50px"
            animation="wave"
            sx={{ backgroundColor: 'rgba(75, 75, 75, 0.1)' }}
          />
        </div>
      </div>
    </Card>
  );
};

export default ProjectGridItemSkeleton;
