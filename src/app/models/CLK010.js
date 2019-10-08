/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CLK010', {
    CLK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CLK_CODNCM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CLK_CODNBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CLK_EX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CLK_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CLK_ALQNAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CLK_ALQIMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CLK_ALQEST: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CLK_ALQMUN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CLK_UF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CLK_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CLK_FONTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CLK_DTINIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CLK_DTFIMV: {
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
    tableName: 'CLK010'
  });
};
