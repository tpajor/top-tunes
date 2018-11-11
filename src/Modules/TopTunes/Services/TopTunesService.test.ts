import TopTunesService from './TopTunesService';
import { dtoiTuneMock } from '../../../Shared/Interfaces/__mocks__/DtoiTuneMock';
import { fromDto } from '../../../Shared/Interfaces/__mocks__/ITuneMocks';
import HttpClient from '../../../Shared/Services/HttpClient';

function setup() {
  const service = new TopTunesService();

  return {
    service,
  };
}

describe('TopTunesService service', () => {
  it('should map dto to model in mapiTunesDtoToModel method', () => {
    const { service } = setup();

    const result = service.mapiTunesDtoToModel([ dtoiTuneMock ]);

    expect(result).toEqual([ fromDto ]);
  });

  it('should call get method in HttpClient service and mapiTunesDtoToModel method in getTopiTunes method', async () => {
    const { service } = setup();
    const res = {
      data: {
        feed: {
          entry: 'mock',
        },
      },
    };

    spyOn(HttpClient.prototype, 'get').and.callFake(() => res);
    spyOn(service, 'mapiTunesDtoToModel');

    await service.getTopiTunes();

    expect(service.mapiTunesDtoToModel).toHaveBeenCalled();
    expect(HttpClient.prototype.get).toHaveBeenCalled();
  });
});
