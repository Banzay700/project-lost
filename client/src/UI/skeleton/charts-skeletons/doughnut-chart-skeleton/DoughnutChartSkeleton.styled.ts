import { Stack, Skeleton, Box, styled } from '@mui/material'

export const DoughnutChartSkeletonWrapper = styled(Stack)(() => ({
  height: '100%',
  width: '100%',
  padding: '0 5%',
  alignItems: 'center',
}))

export const DoughnutChartSkeletonContent = styled(Stack)(() => ({
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4%',
}))

export const DoughnutChartSkeletonCircular = styled(Stack)(() => ({
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
}))

export const CircularDecor = styled(Box)(({ theme }) => ({
  minHeight: '70px',
  minWidth: '70px',
  borderRadius: '50%',
  position: 'absolute',
  content: "''",
  backgroundColor: theme.palette.primary.white,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  [theme.breakpoints.down('lg')]: {
    minHeight: '45px',
    minWidth: '45px',
  },
}))

export const SkeletonCircular = styled(Skeleton)(({ theme }) => ({
  minHeight: '180px',
  minWidth: '180px',
  [theme.breakpoints.down('lg')]: {
    minHeight: '100px',
    minWidth: '100px',
  },
  backgroundColor: theme.palette.primary.extraLight,
}))
