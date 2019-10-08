/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AD7010', {
    AD7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AD7_TOPICO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AD7_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AD7_HORA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AD7_HORA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AD7_NROPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD7_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD7_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AD7_VEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD7_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AD7_PROSPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD7_LOJPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AD7_CONTAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD7_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD7_CODTMK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD7_CODTLV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD7_ITTELE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AD7_PROVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD7_STAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD7_VENDAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AD7_DATAAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AD7_SEQAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AD7_AGEREU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AD7_EMAILP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AD7_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    AD7_LASTMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    AD7_EMLNAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    AD7_IDEXC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    AD7_CHGKEY: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
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
    AD7_ALERTA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AD7_TPALER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AD7_CODUMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    AD7_IDESTN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AD7_NVESTN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'AD7010'
  });
};
