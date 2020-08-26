export default (app) => {
    return {
        computed: {

        },
        data: function() {
            return {
                stream: {
                    id: null,
                },
                talking: false,
            }
        },
        methods: {
            disconnect() {
                app.client.pc.close()
            },
            toggleTalk() {
                this.talking = !this.talking
                app.client.localStream.getTracks().forEach((track) => {
                    track.enabled = !track.enabled
                })
            },
        },
        mounted: async function() {
            app.client.localStream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false,
            })
            this.stream.id = app.client.localStream.id

            app.client.localStream.getTracks().forEach((track) => {
                app.client.pc.addTrack(track, app.client.localStream)
                track.enabled = this.talking
            });
            app.client.join()
        },
        store: ['room', 'participants'],
    }
}