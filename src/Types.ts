export interface InitialState {
  videos: HomePagesVideo[];
  currentPlaying: CurrentPlaying | null;
  searchTerm: string;
  searchResults: [];
  nextPageToken: string | null;
  recommendedVideos: RecommendedVideos[];
}
export interface HomePagesVideo {}
export interface CurrentPlaying {}
export interface RecommendedVideos {}
