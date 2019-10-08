/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('H010_SC290600', {
    FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    REG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    COD_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    UNID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QTD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VL_UNIT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VL_ITEM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    IND_PROP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    COD_PART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    COD_CTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    VL_ITEM_IR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ALQ_PICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    COD_ORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CL_CLASS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'H010_SC290600'
  });
};
