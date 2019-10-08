/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SC4010', {
    C4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C4_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    C4_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C4_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    C4_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C4_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    C4_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    C4_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    C4_GERACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C4_NUMOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    C4_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    C4_OPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    C4_GRADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    C4_ITEMGRD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C4_REVISAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    C4_IDGRADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    C4_MOPC: {
      type: "IMAGE",
      allowNull: true
    }
  }, {
    tableName: 'SC4010'
  });
};
