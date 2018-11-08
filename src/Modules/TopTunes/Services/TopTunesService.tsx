import IDtoiTune from '../../../Shared/Interfaces/dto/IDtoiTune';
import IITune from '../../../Shared/Interfaces/models/IITune';
import HttpClient from '../../../Shared/Services/HttpClient';
import { urls } from '../../../Routing/urls';

export default class TopTunesService {
  public async getTopiTunes(): Promise<IITune[]> {
    const http = new HttpClient();

    const res = await http.get(urls.api.getiTunes);
  
    return this.mapiTunesDtoToModel(res.data.feed.entry);
  }

  private mapiTunesDtoToModel(dto: IDtoiTune[]): IITune[] {
    return dto.map((iTuneDto: IDtoiTune) => {
      return ({
        category: iTuneDto.category.attributes.term,
        artist: iTuneDto['im:artist'].label,
        photo: iTuneDto['im:image'][iTuneDto['im:image'].length - 1].label,
        numberOfSongs: +iTuneDto['im:itemCount'].label,
        name: iTuneDto['im:name'].label,
        price: iTuneDto['im:price'].label,
        releaseDate: new Date(iTuneDto['im:releaseDate'].label),
        link: iTuneDto.link.attributes.href,
        rights: iTuneDto.rights.label,
        title: iTuneDto.title.label,
      });
    });
  }
}
