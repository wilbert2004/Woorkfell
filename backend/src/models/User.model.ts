import { Table, Column, Model, DataType, Default, BelongsTo, PrimaryKey, AutoIncrement, ForeignKey} from 'sequelize-typescript'
import Rol from './Rol.model'
import Company from './Company.model'

@Table({
    tableName: 'user',
    timestamps: false
})

class User extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    user_id: number

    @Column({
        type: DataType.STRING(100),

    })
    name: string

    @Column({
        type: DataType.STRING(255),
    })
    password: string

    @Column({
        type: DataType.STRING(255),
        unique: true,
    })
    email: string
    
    //Llave foranea hacia rol
    @ForeignKey(() => Rol)
    @Default(2)
    @Column({
        type: DataType.INTEGER
    })
    rol_id: number

    @BelongsTo(() => Rol)
    rol: Rol

    @ForeignKey(() => Company)
    @Default(null)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    company_id: number

    @BelongsTo(() => Company)
    company: Company
}

export default User
