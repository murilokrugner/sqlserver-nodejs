/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SB4010', {
    B4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B4_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                          '
    },
    B4_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    B4_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B4_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B4_LOCPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B4_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    B4_TE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B4_TS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    B4_SEGUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B4_CONV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B4_TIPCONV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B4_PRV1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B4_PRV2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B4_PRV3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B4_PRV4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B4_PRV5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B4_PRV6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B4_PRV7: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B4_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B4_FORAEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B4_RASTRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B4_LOCALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B4_PICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B4_IPI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B4_POSIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    B4_ALIQISS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B4_CODISS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    B4_PICMRET: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B4_PICMENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B4_CLASFIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B4_IRRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B4_LINHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B4_COLUNA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B4_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'SB4010'
  });
};
