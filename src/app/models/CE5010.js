/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CE5010', {
    CE5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CE5_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                    '
    },
    CE5_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CE5_CODLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                      '
    },
    CE5_CODUTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CE5_CODCDH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                      '
    },
    CE5_TPMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CE5_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CE5_TRANSF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CE5_NUMDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CE5_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CE5_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CE5_LOJACF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CE5_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    },
    CE5_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CE5_CHVNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    CE5_TPLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                      '
    }
  }, {
    tableName: 'CE5010'
  });
};
