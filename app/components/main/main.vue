<component>
    <div>Room: {{room}}</div>
    <div>Local stream: {{stream.id}}</div>
    <div v-for="participant of participants">
        Participant track: {{participant}}
    </div>
    <button @click="toggleTalk">
        <span v-if="talking">Talking</span>
        <span v-else>Muted</span>
    </button>
    <button @click="disconnect">
        Disconnect
    </button>
    <audio
        ref="audio"
        :id="`audio-${stream.id}`"
        autoplay="true"
        muted="true"
    />
</component>