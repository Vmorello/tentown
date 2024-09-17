import MapSettings from '@/components/MapSettings'


export default async function MapSettingPage({ params }: { params: { map_id: string } }) {

    return <MapSettings id={params.map_id} />

}