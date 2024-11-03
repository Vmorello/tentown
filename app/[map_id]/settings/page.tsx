import MapSettings from '@/components/MapSettings'


export default async function MapSettingPage({ params }: { params: { map_id: string } }) {

    return <div className="flex flex-col items-center">
        <MapSettings id={params.map_id} />
    </div>

}