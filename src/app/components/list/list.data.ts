import { Category, Project } from './list.types';

export const categories: Category[] = [
  {
    id: '9a67dff7-3c38-4052-a335-0cef93438ff6',
    title: 'Web',
    slug: 'web'
  },
  {
    id: 'a89672f5-e00d-4be4-9194-cb9d29f82165',
    title: 'Firebase',
    slug: 'firebase'
  },
  {
    id: '02f42092-bb23-4552-9ddb-cfdcc235d48f',
    title: 'Cloud',
    slug: 'cloud'
  },
  {
    id: '5648a630-979f-4403-8c41-fc9790dea8cd',
    title: 'Android',
    slug: 'android'
  }
];

export const projects: Project[] = [
  {
    id: '694e4e5f-f25f-470b-bd0e-26b1d4f64028',
    title: 'Basics of Angular',
    slug: 'basics-of-angular',
    description: 'Introductory project for Angular and framework basics',
    category: 'web',
    duration: 30,
    totalSteps: 11,
    updatedAt: 'Jun 28, 2021',
    featured: true,
    progress: {
      currentStep: 3,
      completed: 2
    }
  },
  {
    id: 'f924007a-2ee9-470b-a316-8d21ed78277f',
    title: 'Basics of TypeScript',
    slug: 'basics-of-typeScript',
    description: 'Beginner project for Typescript and its basics',
    category: 'web',
    duration: 60,
    totalSteps: 11,
    updatedAt: 'Nov 01, 2021',
    featured: true,
    progress: {
      currentStep: 5,
      completed: 3
    }
  },
  {
    id: '0c06e980-abb5-4ba7-ab65-99a228cab36b',
    title: 'Android N: Quick Settings',
    slug: 'android-n-quick-settings',
    description: 'Step by step guide for Android N: Quick Settings',
    category: 'android',
    duration: 120,
    totalSteps: 11,
    updatedAt: 'May 08, 2021',
    featured: false,
    progress: {
      currentStep: 10,
      completed: 1
    }
  },
  {
    id: '1b9a9acc-9a36-403e-a1e7-b11780179e38',
    title: 'Build an App for the Google Assistant with Firebase',
    slug: 'build-an-app-for-the-google-assistant-with-firebase',
    description: 'Dive deep into Google Assistant apps using Firebase',
    category: 'firebase',
    duration: 30,
    totalSteps: 11,
    updatedAt: 'Jan 09, 2021',
    featured: false,
    progress: {
      currentStep: 4,
      completed: 3
    }
  },
  {
    id: '181728f4-87c8-45c5-b9cc-92265bcd2f4d',
    title: 'Looking at Campaign Finance with BigQuery',
    slug: 'looking-at-campaign-finance-with-bigquery',
    description: 'Dive deep into BigQuery: Campaign Finance',
    category: 'cloud',
    duration: 60,
    totalSteps: 11,
    updatedAt: 'Nov 01, 2021',
    featured: false,
    progress: {
      currentStep: 0,
      completed: 0
    }
  },
  {
    id: 'fcbfedbf-6187-4b3b-89d3-1a7cb4e11616',
    title: 'Personalize Your iOS App with Firebase User Management',
    slug: 'personalize-your-ios-app-with-firebase-user-management',
    description: 'Dive deep into User Management on iOS apps using Firebase',
    category: 'firebase',
    duration: 90,
    totalSteps: 11,
    updatedAt: 'Aug 08, 2021',
    featured: false,
    progress: {
      currentStep: 0,
      completed: 0
    }
  }
];
