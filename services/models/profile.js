import {validDate} from '../../utils';
// import defaultAvatar from '../../assets/images/default-avatar.png';

export const myProfileModel = data => ({
  ...data,
  // pictureUrl: data.pictureUrl ?? defaultAvatar,
  // picThumbnailUrl: data.picThumbnailUrl ?? defaultAvatar,
  pictureUrl: data.pictureUrl ?? null,
  picThumbnailUrl: data.picThumbnailUrl ?? null,
  dateOfBirth: validDate(data.dateOfBirth),
  idExpiration: validDate(data.idExpiration),
});
