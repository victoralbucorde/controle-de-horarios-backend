import randomUUID from "node:crypto"

export class DatabaseMemory{
    #pontos = new Map()

    create(shift){
        this.#pontos.set(randomUUID, shift)
    }

    update(id, shift){
        this.#pontos.set(id,shift)
    }

    delete(id){
        this.#pontos.delete(id)
    }
}