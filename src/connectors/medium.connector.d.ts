interface LatestResponse {
  success: boolean;
  payload: {
    user: any;
    streamItems: any;
    userMeta: any;
    userNavActiveIndex: number;
    profileTypeName: string;
    references: {
      User: any;
      Post: {
        [id: string]: Post
      };
      Social: any;
      SocialStats: any;
    };
    paging: {
      path: string;
      next: {
        limit: number;
        to: string;
        source: string;
        page: number;
      }
    }
  }
  v: number;
  b: string;
}


interface Post {
  id: string;
  versionId: string;
  creatorId: string;
  homeCollectionId: string;
  title: string;
  detectedLanguage: string;
  latestVersion: string;
  latestPublishedVersion: string;
  hasUnpublishedEdits: boolean;
  latestRev: number;
  createdAt: number;
  updatedAt: number;
  acceptedAt: number;
  firstPublishedAt: number;
  latestPublishedAt: number;
  vote: boolean;
  experimentalCss: string;
  displayAuthor: string;
  content: {
    subtitle: string;
    postDisplay: {
      coverless: boolean;
    }
  }
  virtuals: {
    createdAtRelative: string;
    updatedAtRelative: string;
    acceptedAtRelative: string;
    createdAtEnglish: string;
    updatedAtEnglish: string;
    firstPublishedAtEnglish: string;
    latestPublishedAtEnglish: string;
    allowNotes: boolean;
    snippet: string;
    previewImage: {
      imageId: string;
      filter: string;
      backgroundSize: string;
      originalWidth: number;
      originalHeight: number;
      strategy: string;
      height: number;
      width: number;
    }
    wordCount: number;
    imageCount: number;
    readingTime: number;
    subtitle: string;
    usersBySocialRecommends: any[]; // todo: find example of this field
    latestPublishedAtAbbreviated: string;
    firstPublishedAtAbbreviated: string;
    emailSnippet: string;
    recommends: number;
    isBookmarked: boolean;
    tags: Tag[];
    socialRecommendsCount: number;
    responsesCreatedCount: number;
    links: {
      entries: any[]; // todo: find example of this field
      version: string;
      generatedAt: number;
    };
    isLockedPreviewOnly: boolean;
  };
  coverless: boolean;
  slug: string;
  translationSourcePostId: string;
  translationSourceCreatorId: string;
  isApprovedTranslation: boolean;
  inResponseToPostId: string;
  inResponseToRemovedAt: number;
  isTitleSynthesized: boolean;
  allowResponses: boolean;
  importedUrl: string;
  importedPublishedAt: number;
  visibility: number;
  uniqueSlug: string;
  previewContent: {
    bodyModel: {
      paragraphs: Paragraph[];
      sections: Section[];
    }
    isFullContent: boolean;
  }
  license: number;
  inResponseToMediaResourceId: string;
  canonicalUrl: string;
  approvedHomeCollectionId: string;
  newsletterId: string;
  webCanonicalUrl: string;
  mediumUrl: string;
  migrationId: string;
  notifyFollowers: boolean;
  notifyTwitter: boolean;
  isSponsored: boolean;
  isRequestToPubDisabled: boolean;
  notifyFacebook: boolean;
  responseHiddenOnParentPostAt: boolean;
  type: string;
}

interface Tag {
  slug: string;
  name: string;
  postcount: number;
  virtuals: {
    isFollowing: boolean;
  };
  metadata: {
    followerCount: number;
    postcount: number;
    coverImage: {
      id: string;
      originalWidth?: number;
      originalHeight?: number;
      isFeatured?: boolean;
    }
  }
  type: string;
}
interface Paragraph {
  name: string;
  type: number;
  text: string;
  markups: any[]; //todo: find example of this field
  alignment: number;
}
interface Section {
  startIndex: number;
  //todo: may be more fields here?
}
