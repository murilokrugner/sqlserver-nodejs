/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SZ1010', {
    Z1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Z1_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Z1_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    Z1_ANO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    Z1_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Z1_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Z1_NOMECLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    Z1_ENDEREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    Z1_CIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    Z1_ESTADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Z1_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    Z1_PRODUTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    Z1_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Z1_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    Z1_TOTPROD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Z1_TOTPRPA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Z1_TOTIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Z1_TOTIMPA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Z1_TOTBRUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Z1_TOTBRUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Z1_TOTLIUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Z1_TOTLIQ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    Z1_TOTBFOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Z1_TOTLFOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Z1_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SZ1010'
  });
};
