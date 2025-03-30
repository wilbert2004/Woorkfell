import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, Default} from 'sequelize-typescript'
import Company from './Company.model'

@Table({
    tableName: 'period',
    timestamps: false
})

class Period extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    period_id: number

    @Column({
        type: DataType.STRING(100),

    })
    name: string

    @Default(false)
    @Column({
        type: DataType.BOOLEAN
    })
    status: boolean

    @Column({
        type: DataType.DATE
    })
    date_start: string
    
    @Column({
        type: DataType.DATE
    })
    date_end: string

    @ForeignKey(() => Company)
    @Column({
        type: DataType.INTEGER
    })
    company_id: number

    @BelongsTo(() => Company)
    company: Company
}

export default Period
