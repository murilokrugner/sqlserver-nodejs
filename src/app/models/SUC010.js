/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SUC010', {
    UC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UC_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UC_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UC_CODCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UC_ENTIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    UC_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    UC_OPERADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UC_MIDIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UC_OPERACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UC_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UC_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UC_CODCAMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UC_PENDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UC_HRPEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    UC_CODOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UC_INICIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UC_FIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UC_CODCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UC_DTENCER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UC_CODENCE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UC_CODMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UC_DIASDAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UC_HORADAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UC_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UC_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UC_PROSPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    UC_CHAORIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UC_ITCHAOR: {
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
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    UC_MOTPLS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UC_PROTANS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    UC_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'SUC010'
  });
};
