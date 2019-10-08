/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAF010', {
    TAF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TAF_CODEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TAF_CODNIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TAF_NOMNIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                        '
    },
    TAF_NIVEL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TAF_NIVSUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TAF_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TAF_INDCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TAF_CODCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TAF_MODSGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TAF_MODMNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TAF_MODMDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TAF_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TAF_CENTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TAF_DOCFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TAF_DOCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TAF_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TAF_ETAPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TAF_PLANTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TAF_TIPIMG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TAF_IMAGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    TAF_POSX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TAF_POSY: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TAF_TAMX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TAF_TAMY: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TAF_MOVBLO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TAF_EVENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    TAF_ALERTX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TAF_ALERTY: {
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
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    TAF_EVEMDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    TAF_SITNIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TAF_CODFAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TAF_CODAMB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TAF_EVESGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    TAF_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    }
  }, {
    tableName: 'TAF010'
  });
};
